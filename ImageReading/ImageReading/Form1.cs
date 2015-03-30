using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using PFP.Imaging;

namespace ImageReading
{
    public partial class Form1 : Form
    {
        private const String Folder = "images";

        public Form1()
        {
            InitializeComponent();
        }

        private static bool IsImage(String filename)
        {
            string[] extensions = {".jpg", ".png", ".tif", ".jpg", ".bmp"};
            return extensions.Any(filename.EndsWith);
        }

        private void showImagesBt_Click(object sender, EventArgs e)
        {
            textBox.Clear();
            var fileEntries = Directory.GetFiles(Folder); 
            foreach (var fileName in fileEntries)
            {
                if (IsImage(fileName))
                {
                    textBox.AppendText(GetImageInfo(fileName));
                }
            }
        }

        private String GetImageInfo(String fileName)
        {
            using (var fs = new FileStream(fileName, FileMode.Open))
            {
                using (var image = Image.FromStream(fs, false, false))
                {
                    var tmp = String.Format("\t{0}\n\t\t{1} x {2}\n\t\tDpi: {3} x {4}\n\t\t{5}\n",
                     Path.GetFileName(fileName), image.Width, image.Height, image.HorizontalResolution,
                     image.VerticalResolution, "***************************");
                   var imageMeta = BuildPropsHash(image);
                    return imageMeta.Aggregate(tmp, (current, property) => current + 
                        String.Format("\t\t{0}: {1}\n", property.Key, property.Value));
                }
            }
        }



        public static String GetCompressionType(short type)
        {
            switch (type)
            {
                case 1:
                    return "No Compression";
                case 2:
                    return "CCITT Group 3";
                case 3:
                    return "Facsimile-compatible CCITT Group 3";
                case 4:
                    return "CCITT Group 4 (T.6)";
                case 5:
                    return "LZW";
                case -32763:
                    return "RLE";
                default:
                    return "Undefined";
            }
        }

        private void selectFileBt_Click(object sender, EventArgs e)
        {
            if (openFileDialog.ShowDialog() == DialogResult.OK)
            {
                textBox.Text = GetImageInfo(openFileDialog.FileName);
            }
        }

        public Dictionary<string, object> BuildPropsHash(Image metaImage)
        {
            var encoding = new ASCIIEncoding();
            var returnImageProps = new Dictionary<string, object>();
            foreach (var property in metaImage.PropertyItems)
            {
                var propTagId = Enum.GetName(typeof (PropertyTagId), property.Id);
                if (propTagId != null && property.Value != null)
                {
                    var propValue = new Object();
                    var type = (PropertyTagType) property.Type;
                    switch (type)
                    {
                        case PropertyTagType.PixelFormat4bppIndexed:
                        case PropertyTagType.Byte:
                            propValue = Trim(string.Join(",", property.Value.ToArray()), 50);
                            break;
                        case PropertyTagType.ASCII:
                            propValue = encoding.GetString(property.Value, 0, property.Len - 1);
                            break;
                        case PropertyTagType.Int16:
                            propValue = BitConverter.ToInt16(property.Value, 0);
                            break;
                        case PropertyTagType.SLONG:
                        case PropertyTagType.Int32:
                            propValue = BitConverter.ToInt32(property.Value, 0);
                            break;
                        case PropertyTagType.SRational:
                        case PropertyTagType.Rational:
                            var numerator = BitConverter.ToUInt32(property.Value, 0);
                            var denominator = BitConverter.ToUInt32(property.Value, 4);

                            propValue = denominator != 0 ? (numerator/denominator).ToString() : "0";
                            if (propValue.ToString() == "NaN")
                                propValue = "0";
                            break;
                        case PropertyTagType.Undefined:
                            propValue = "Undefined Data";
                            break;
                    }
                    if ((PropertyTagId)property.Id == PropertyTagId.Compression)
                        propValue = GetCompressionType((short)propValue);
                    returnImageProps.Add(propTagId, propValue);
                }
            }
            return returnImageProps;
        }
        private static string Trim(string text, int limit, string suffix = "...")
        {
            return text.Length > limit ? text.Substring(0, limit) + suffix : text;
        }

        private void selectFolderBt_Click(object sender, EventArgs e)
        {
            if (folderBrowserDialog.ShowDialog() == DialogResult.OK)
            {
                textBox.Clear();
                var fileEntries = Directory.GetFiles(folderBrowserDialog.SelectedPath);
                foreach (var fileName in fileEntries.Where(IsImage))
                {
                    textBox.AppendText(GetImageInfo(fileName));
                }
            }
        }
    }
}

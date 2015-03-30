namespace ImageReading
{
    partial class Form1
    {
        /// <summary>
        /// Требуется переменная конструктора.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Освободить все используемые ресурсы.
        /// </summary>
        /// <param name="disposing">истинно, если управляемый ресурс должен быть удален; иначе ложно.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Код, автоматически созданный конструктором форм Windows

        /// <summary>
        /// Обязательный метод для поддержки конструктора - не изменяйте
        /// содержимое данного метода при помощи редактора кода.
        /// </summary>
        private void InitializeComponent()
        {
            this.selectFileBt = new System.Windows.Forms.Button();
            this.showImagesBt = new System.Windows.Forms.Button();
            this.textBox = new System.Windows.Forms.RichTextBox();
            this.openFileDialog = new System.Windows.Forms.OpenFileDialog();
            this.selectFolderBt = new System.Windows.Forms.Button();
            this.folderBrowserDialog = new System.Windows.Forms.FolderBrowserDialog();
            this.SuspendLayout();
            // 
            // selectFileBt
            // 
            this.selectFileBt.Location = new System.Drawing.Point(12, 137);
            this.selectFileBt.Name = "selectFileBt";
            this.selectFileBt.Size = new System.Drawing.Size(137, 43);
            this.selectFileBt.TabIndex = 1;
            this.selectFileBt.Text = "Show selected image info";
            this.selectFileBt.UseVisualStyleBackColor = true;
            this.selectFileBt.Click += new System.EventHandler(this.selectFileBt_Click);
            // 
            // showImagesBt
            // 
            this.showImagesBt.Location = new System.Drawing.Point(12, 203);
            this.showImagesBt.Name = "showImagesBt";
            this.showImagesBt.Size = new System.Drawing.Size(137, 39);
            this.showImagesBt.TabIndex = 2;
            this.showImagesBt.Text = "Show images info";
            this.showImagesBt.UseVisualStyleBackColor = true;
            this.showImagesBt.Click += new System.EventHandler(this.showImagesBt_Click);
            // 
            // textBox
            // 
            this.textBox.Location = new System.Drawing.Point(167, 6);
            this.textBox.Name = "textBox";
            this.textBox.ScrollBars = System.Windows.Forms.RichTextBoxScrollBars.Vertical;
            this.textBox.Size = new System.Drawing.Size(637, 504);
            this.textBox.TabIndex = 3;
            this.textBox.Text = "";
            // 
            // openFileDialog
            // 
            this.openFileDialog.FileName = "openFileDialog1";
            // 
            // selectFolderBt
            // 
            this.selectFolderBt.Location = new System.Drawing.Point(12, 263);
            this.selectFolderBt.Name = "selectFolderBt";
            this.selectFolderBt.Size = new System.Drawing.Size(137, 41);
            this.selectFolderBt.TabIndex = 4;
            this.selectFolderBt.Text = "Show from folder";
            this.selectFolderBt.UseVisualStyleBackColor = true;
            this.selectFolderBt.Click += new System.EventHandler(this.selectFolderBt_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(881, 511);
            this.Controls.Add(this.selectFolderBt);
            this.Controls.Add(this.textBox);
            this.Controls.Add(this.showImagesBt);
            this.Controls.Add(this.selectFileBt);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button selectFileBt;
        private System.Windows.Forms.Button showImagesBt;
        private System.Windows.Forms.RichTextBox textBox;
        private System.Windows.Forms.OpenFileDialog openFileDialog;
        private System.Windows.Forms.Button selectFolderBt;
        private System.Windows.Forms.FolderBrowserDialog folderBrowserDialog;
    }
}


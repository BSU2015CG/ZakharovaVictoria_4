/**
 * Created by User on 05.03.2015.
 */
var keyColor = 0;
var n = 255;
var fastMode = false;
function changeMode(){
    fastMode ^= true;
}
var container3d = document.getElementById("container3d");
var svCanvas = document.getElementById("svCanvas");                                // надо ли?
var resultCanvas = document.getElementById("resultCanvas");
var hueCanvas = document.getElementById("hueCanvas");
var yCanvas = document.getElementById("yCanvas");
var lCanvas = document.getElementById("lCanvas");
var cCanvas = document.getElementById("cCanvas");
var myCanvas = document.getElementById("myCanvas");
var uvCanvas = document.getElementById("uvCanvas");
var xzCanvas = document.getElementById("xzCanvas");

var c2Slider = document.getElementById("c2Slider");
var m2Slider = document.getElementById("m2Slider");
var y2Slider = document.getElementById("y2Slider");
var kSlider = document.getElementById("kSlider");
var cSlider = document.getElementById("cSlider");
var mSlider = document.getElementById("mSlider");
var ySlider = document.getElementById("ySlider");
var hSlider = document.getElementById("hueSlider");
var sSlider = document.getElementById("saturationSlider");
var vSlider = document.getElementById("valueSlider");
var l_slider = document.getElementById("l_slider");
var u_slider = document.getElementById("u_slider");
var v_slider = document.getElementById("v_slider");
var x_slider = document.getElementById("x_slider");
var y_slider = document.getElementById("y_slider");
var z_slider = document.getElementById("z_slider");
var x_input = document.getElementById("x_input");
var y_input = document.getElementById("y_input");
var z_input = document.getElementById("z_input");
var c2Input = document.getElementById("c2Input");
var m2Input = document.getElementById("m2Input");
var y2Input = document.getElementById("y2Input");
var cInput = document.getElementById("cInput");
var mInput = document.getElementById("mInput");
var yInput = document.getElementById("yInput");
var rInput = document.getElementById("rInput");
var gInput = document.getElementById("gInput");
var bInput = document.getElementById("bInput");
var l_input = document.getElementById("l_input");
var u_input = document.getElementById("u_input");
var v_input = document.getElementById("v_input");
var hInput = document.getElementById("hInput");
var sInput = document.getElementById("sInput");
var vInput = document.getElementById("vInput");
var kInput = document.getElementById("kInput");
var kReadOnly = document.getElementById("k");

c2Slider.value = 255;
m2Slider.value = 0;
y2Slider.value = 0;
kSlider.value = 0;
cSlider.value = 255;
mSlider.value = 0;
ySlider.value = 0;
hSlider.value = 180;
sSlider.value = 100;
vSlider.value = 100;
x_slider.value = 137;
y_slider.value = 201;
z_slider.value = 273;
l_slider.value = 93;
u_slider.value = -94;
v_slider.value = -8;

var blockWidth = topContainer.offsetWidth * 0.35;
var maxWidth = topContainer.offsetWidth / 2;
if(maxWidth > 360) maxWidth = 360;
var maxWidthString = maxWidth + "px";
var blockWidthString = blockWidth + "px";
svCanvas.width = svCanvas.height = hueCanvas.height = maxWidth;
myCanvas.width = myCanvas.height = xzCanvas.width = xzCanvas.height = uvCanvas.width =
    uvCanvas.height = cCanvas.height = yCanvas.height = lCanvas.height = blockWidth;

var horizontals = document.getElementsByClassName('horizontal');
for(var i = 0; i < horizontals.length; i++) {
    horizontals[i].style.width = blockWidthString;
}
var verticals = document.getElementsByClassName('vertical');
for(var i = 0; i < verticals.length; i++) {
    verticals[i].style.height = blockWidthString;
}
var horizontals = document.getElementsByClassName('horizontalFull');
for(var i = 0; i < horizontals.length; i++) {
    horizontals[i].style.width = maxWidthString;
}
var verticals = document.getElementsByClassName('verticalFull');
for(var i = 0; i < verticals.length; i++) {
    verticals[i].style.height = maxWidthString;
}

var cyan = cCanvas.getContext("2d");
var my = myCanvas.getContext("2d");
var sv = svCanvas.getContext("2d");
var xz = xzCanvas.getContext("2d");
var uv = uvCanvas.getContext("2d");
var xzData = xz.createImageData(blockWidth, blockWidth);
var hue = hueCanvas.getContext("2d");
var yContext = yCanvas.getContext("2d");
var lContext = lCanvas.getContext("2d");
var res = resultCanvas.getContext("2d");
res.createImageData(resultCanvas.width, resultCanvas.width);
var hsvData = sv.createImageData(maxWidth, maxWidth);
var hueData = hue.createImageData(hueCanvas.width, maxWidth);
var yData = yContext.createImageData(yCanvas.width, blockWidth);
var lData = lContext.createImageData(lCanvas.width, blockWidth);
var cyanData = cyan.createImageData(cCanvas.width, blockWidth);
var myData = my.createImageData(blockWidth, blockWidth);
var uvData = uv.createImageData(blockWidth, blockWidth);

function setPixel(imageData, x, y, r, g, b) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = n;
};

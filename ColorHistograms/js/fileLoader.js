var canvas = document.getElementById("imageCanvas");
var ctx = canvas.getContext("2d");
var data;
var pixels = [];

function setPixel(imageData, x, y, r, g, b) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = 255;
};

$('#fileLoader').change(function() {
    clearInputs();
    var fr = new FileReader;
    fr.onload = function() {
        var img = new Image;
        img.onload = function() {
            var maxSide =  document.getElementById("imgContainer").offsetWidth;
            canvas.width = this.width < maxSide ? this.width : maxSide;
            canvas.height = this.height/this.width*canvas.width;
            if(canvas.height > maxSide){
                canvas.height = maxSide;
                canvas.width = this.width/this.height*canvas.height;
            }
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            data = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for(var i = 0; i < data.data.length; i++){
                pixels[i] = data.data[i];
            }
            fillCharts();
        }
        img.src = fr.result;
    };
    fr.readAsDataURL(this.files[0]);
});

function clearInputs(){
    $('#contrastSlider').slider('value', 128);
    $('#brightnessSlider').slider('value', 0);
    redMaxInput.value = 0;
    greenMaxInput.value = 0;
    blueMaxInput.value = 0;
    maxInput.value = 0;
    redAverageInput.value = 0;
    greenAverageInput.value = 0;
    blueAverageInput.value = 0;
    averageInput.value = 0;
    brightness.value = 0;
    contrast.value = 128;
}







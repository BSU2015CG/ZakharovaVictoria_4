var lowContrastFunc = function(x, level){
    return x*(255-2*level)/255+level;
}

var highContrastFunc = function(x, level) {
    if(x < level) return 0;
    if(x > 255-level) return 255;
    return 255 * (x - level) / (255 - 2 * level);
}

function changeContrastOrBrightness(){
    var level = parseInt(contrast.value);
    var c = level > 127 ? level-128 : 128-level;
    var l = parseInt(brightness.value);
    for(var x = 0; x < canvas.width; x++){
        for(var y = 0; y < canvas.height; y++){
            var index = (x + y * data.width) * 4;
            var color = [];
            for(var i = 0; i < 3; i++){
                color[i] = pixels[index+i];
                color[i] = level > 127 ? highContrastFunc(color[i], c) : lowContrastFunc(color[i], c);
                color[i] += l;
                if(color[i] < 0) color[i] = 0;
                if(color[i] > 255) color[i] = 255;
            }
            setPixel(data, x, y, color[0], color[1], color[2]);
        }
    }
    ctx.putImageData(data, 0, 0);
    fillCharts();
}

$('#contrast').change(function() {
    changeContrastOrBrightness();
    $('#contrastSlider').slider('value', $(this).val());
});

$('#brightness').change(function() {
    changeContrastOrBrightness();
    $('#brightnessSlider').slider('value', $(this).val());
});



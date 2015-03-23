var sums = [];
var frequencies = [];

function countFrequencies(){
    var size = data.height*data.width;
    for(var i = 0; i < size*4; i+=4){
        for(var j = 0; j < 3; j++) {
            var value = data.data[i+j];
            sums[j] += value;
            frequencies[value][j]++;
            frequencies[value][3]++;
        }
    }
}

function clear(){
    for(var j = 0; j < 3; j++){
        sums[j] = 0;
    }
    for(var i = 0; i < 256; i++){
        frequencies[i] = [];
        for(var j = 0; j < 4; j++){
            frequencies[i][j] = 0;
        }
    }
}

function findMaxValue(index){
    var max = 0;
    for(var i = 255; i >= 0; i--){
        if(frequencies[i][index] > 0){
            max = i;
            break;
        }
    }
    return max;
}

function findAverageValue(index){
    return parseInt((index == 3 ? sums.reduce(function(a, b) { return a+b; })/3 : sums[index])
        /canvas.width/canvas.height);
}

function findMaxCount(index){
    var max = 0;
    for(var i = 255; i >= 0; i--){
        if(frequencies[i][index] > max){
            max = frequencies[i][index];
        }
    }
    return max;
}

function fillCanvas(canvasId, maxId, mediumId, index){
    var chartCanvas = document.getElementById(canvasId);
    var ctx = chartCanvas.getContext("2d");
    var data = ctx.createImageData(chartCanvas.width, chartCanvas.height);
    var frequency, fill;
    document.getElementById(mediumId).value = findAverageValue(index);
    document.getElementById(maxId).value = findMaxValue(index);
    var maxCount = findMaxCount(index);
    for(var x = 0; x < chartCanvas.width; x++){
        frequency = frequencies[x][index]*chartCanvas.height/maxCount;
        for(var y = 0; y < chartCanvas.height; y++){
            fill = frequency > y;
            var val = fill ? 0 : 255;
            var r = (index == 0 && fill) ? 255 - val : val;
            var g = (index == 1 && fill) ? 255 - val : val;
            var b = (index == 2 && fill) ? 255 - val : val;
            if(fill && index == 3){
                r = g = b = 0;
            }
            setPixel(data, x, chartCanvas.height-y, r, g, b);
        }
    }
    ctx.putImageData(data, 0, 0);
}

function fillCharts(){
    clear();
    countFrequencies();
    fillCanvas("redCanvas", "redMaxInput", "redAverageInput", 0);
    fillCanvas("greenCanvas", "greenMaxInput", "greenAverageInput", 1);
    fillCanvas("blueCanvas", "blueMaxInput", "blueAverageInput", 2);
    fillCanvas("averageCanvas", "maxInput", "averageInput", 3);
}
/**
 * Created by User on 05.03.2015.
 */
function fillHSVSquare(h){
    for(var x = 0; x < maxWidth; x++){
        for(var y = 0; y < maxWidth; y++){
            var color = hsv2rgb(h, x/maxWidth*100, 100 - y/maxWidth*100);
            setPixel(hsvData, x, y, color.r*n/100, color.g*n/100, color.b*n/100);
        }
    }
    sv.putImageData(hsvData, 0, 0);
}
function hsv2rgb(h, s, v){
    var color = {};
    var hi = Math.floor(h/60);
    var vmin = (100-s)*v/100;
    var a = (v - vmin)*(h%60)/60;
    var vinc = vmin+a;
    var vdec = v-a;
    switch(hi){
        case 0:
            color.r = v;
            color.g = vinc;
            color.b = vmin;
            break;
        case 1:
            color.r = vdec;
            color.g = v;
            color.b = vmin;
            break;
        case 2:
            color.r = vmin;
            color.g = v;
            color.b = vinc;
            break;
        case 3:
            color.r = vmin;
            color.g = vdec;
            color.b = v;
            break;
        case 4:
            color.r = vinc;
            color.g = vmin;
            color.b = v;
            break;
        case 5:
            color.r = v;
            color.g = vmin;
            color.b = vdec;
            break;
    }
    return color;
}
function fillHSVHue(){
    for(var x = 0; x < hueCanvas.width; x++) {
        for(var y = 0; y < maxWidth; y++){
            var color = hsv2rgb(360-y*360/maxWidth, 100, 100);
            setPixel(hueData, x, y, color.r*n/100, color.g*n/100, color.b*n/100);
        }
    }
    hue.putImageData(hueData, 0, 0);
}
fillHSVHue();
function rgb2hsv(r, g, b){
    r /= n;
    g /= n;
    b /= n;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var color = {}
    var diff = max - min;
    if(diff == 0) color.h = 0;
    else if(max == r){
        color.h = 60*(g-b)/diff;
        if(g < b) color.h += 360;
    } else if(max == g){
        color.h = 60*(b-r)/diff+120;
    } else {
        color.h = 60*(r-g)/diff+240;
    }
    color.s = max==0 ? 0 : (1-min/max)*100;
    color.v = max*100;
    return color;
}
function fillResultFromHSV(slider, h, s, v){
    var color = hsv2rgb(h, s, v);
    var r = Math.round(color.r*n/100), g = Math.round(color.g*n/100), b = Math.round(color.b*n/100);
    fillResult("hsv", slider, r, g, b);
    return color;
}


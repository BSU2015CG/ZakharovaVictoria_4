/**
 * Created by User on 05.03.2015.
 */
function rgb2cmyk2(r, g, b){
    var color = {};
    kInput.value = Math.min(n-r, n-g, n-b);
    color.k = kInput.value;
    var black = color.k/n;
    if(black == 1){
        color.c = 0;
        color.m = 0;
        color.y = 0;
    } else {
        color.c = n - r / (1 - black);
        color.m = n - g / (1 - black);
        color.y = n - b / (1 - black);
    }
    return color;
}
function cmyk22torgb(c, m, y, k){
    var color = {};
    var black = k/n;
    if(black == 1){
        color.r = 0;
        color.g = 0;
        color.b = 0;
    } else {
        color.r = (n - c) * (1 - black);
        color.g = (n - m) * (1 - black);
        color.b = (n - y) * (1 - black);
    }
    return color;
}
function fillResultFromCMYK2(slider, c, m, y, k){
    var color = cmyk22torgb(c, m, y, k);
    fillResult("cmyk2", slider, color.r, color.g, color.b);
    return color;
}


/**
 * Created by User on 06.03.2015.
 */
function rgb2cmyk(r, g, b){
    var color = {};
    color.c = n - r;
    color.m = n - g;
    color.y = n - b;
    color.k = Math.min(color.m, color.c, color.y);
    return color;
}
function cmyk2rgb(c, m, y){
    var color = {};
    color.r = n - c;
    color.g = n - m;
    color.b = n - y;
    return color;
}
function fillResultFromCMYK(slider, c, m, y){
    var color = cmyk2rgb(c, m, y);
    fillResult("cmyk", slider, color.r, color.g, color.b);
    return color;
}
function fillCyan(){
    for(var x = 0; x < cCanvas.width; x++) {
        for(var y = 0; y < blockWidth; y++){
            var color = n*y/blockWidth;
            setPixel(cyanData, x, y, 0, color, color);
        }
    }
    cyan.putImageData(cyanData, 0, 0);
}
function fillMYSquare(c){
    for(var x = 0; x < blockWidth; x++){
        for(var y = 0; y < blockWidth; y++){
            var color = cmyk2rgb(c, x/blockWidth*n, y/blockWidth*n);
            setPixel(myData, x, y, color.r, color.g, color.b);
        }
    }
    my.putImageData(myData, 0, 0);
};
fillCyan();
fillMYSquare(255);


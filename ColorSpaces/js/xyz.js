function rgb2xyz(r, g, b){
    var color = {};
    color.x = 0.4124*r+0.3576*g+0.1805*b;
    color.y = 0.2126*r+0.7152*g+0.0722*b;
    color.z = 0.0193*r+0.1192*g+0.9505*b;
    //console.log("rgb " + r + ' ' + g + ' ' + b + " xyz: " + color.x + ' ' + color.y + ' ' + color.z);
    return color;
}
var xyzTable = document.getElementById("xyzTable");
function xyz2rgb(fillingSquare, x, y, z){
    var color = {};
    color.r = 3.2408 *x-1.5372*y-0.4985*z;
    color.g = -0.9693*x+1.876 *y+0.0416*z;
    color.b = 0.0557 *x-0.204 *y+1.0573*z;
    if(color.r >= 0 && color.r < 256 && color.g >= 0
        && color.g < 256 && color.b >= 0 && color.b < 256){
        xyzTable.style.border = "2px solid rgb(40, 22, 47)";
    } else{
        if(!fillingSquare) xyzTable.style.border = "2px solid red";
        color.r = -1;
        //console.log("xyz " + x + ' ' + y + ' ' + z + " rgb: " + color.r + ' ' + color.g + ' ' + color.b);
    }
    return color;
}
function fillResultFromXYZ(slider, x, y, z){
    var color = xyz2rgb(false, x, y, z);
    fillResult("xyz", slider, color.r, color.g, color.b);
    return color;
}
function fillY(){
    for(var i = 0; i < blockWidth; i++){
        for(var j = 0; j < blockWidth; j++){
            var c = n - n*j/blockWidth;
            setPixel(yData, i, j, c, c, c);
        }
    }
    yContext.putImageData(yData, 0, 0);
}
function fillXZSquare(x){               //TODO:change
    var color;
    for(var i = 0; i < blockWidth; i++){
        for(var j = 0; j < blockWidth; j++){
            color = xyz2rgb(true, x, i / blockWidth * 264, j / blockWidth * 278);
            if(color.r == -1) color = {r: 0, g: 0, b: 0};
            setPixel(xzData, i, j, Math.round(color.r), Math.round(color.g), Math.round(color.b));
        }
    }
    xz.putImageData(xzData, 0, 0);
};
fillY();




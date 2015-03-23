var luvTable = document.getElementById("luvTable");
var Yw = 0.95047, Xw = 1, Zw = 1.08883;
var dw = Xw+15*Yw+3*Zw;
var uw = 4*Xw/dw;
var vw = 9*Yw/dw;
var k = 903.3, eps = 0.008856;
function rgb2luv(r, g, b){
    var color = {};
    var xyzColor = rgb2xyz(r, g, b);
    var x = xyzColor.x/n, y = xyzColor.y/n, z = xyzColor.z/n;
    var d = x+15*y+3*z;
    if(d == 0) {
        color.l = 0;
        color.u = 0;
        color.v = 0;
    } else {
        var u_ = 4 * x / d;
        var v_ = 9 * y / d;
        var yw = y / Yw;
        color.l = yw > eps ? 116 * Math.pow(yw, 1 / 3) - 16 : k * yw;
        color.u = 13 * color.l * (u_ - uw);
        color.v = 13 * color.l * (v_ - vw);
    }
    return color;
}
function luv2rgb(fillingSquare, l, u, v){
    var color = {};
    var a = (52*l/(u+13*l*uw)-1)/3;
    color.y = l > k*eps ? Math.pow((l+16)/116, 3) : l/k;
    var b = -5*color.y;
    var d = color.y*(39*l/(v+13*l*vw)-5);
    color.x = (a==-1/3) ? 0 : (d-b)/(a+1/3);
    color.z = color.x*a+b;
    var rgbColor = xyz2rgb(true, color.x*n, color.y*n, color.z*n);
    if(rgbColor.r == -1){
        if(!fillingSquare) luvTable.style.border = "2px solid red";
    } else {
        luvTable.style.border = "2px solid rgb(40, 22, 47)";
    }
    return rgbColor;
}
function fillResultFromLUV(slider, l, u, v){
    var color = luv2rgb(false, l, u, v);
    fillResult("luv", slider, color.r, color.g, color.b);
    return color;
}
function fillL(){
    for(var i = 0; i < blockWidth; i++){
        for(var j = 0; j < blockWidth; j++){
            var c = n*j/blockWidth;
            setPixel(lData, i, j, c, c, c);
        }
    }
    lContext.putImageData(lData, 0, 0);
}
function fillUVSquare(l){
    var color;
    for(var i = 0; i < blockWidth; i++){
        for(var j = 0; j < blockWidth; j++){
            color = luv2rgb(true, l, -200+400/blockWidth*i,  -200+400/blockWidth*j);
            if(color.r == -1) color = {r: 0, g: 0, b: 0};
            setPixel(uvData, i, j, Math.round(color.r), Math.round(color.g), Math.round(color.b));
        }
    }
    uv.putImageData(uvData, 0, 0);
};
fillL();




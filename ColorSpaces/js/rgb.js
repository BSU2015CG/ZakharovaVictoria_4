/**
 * Created by User on 06.03.2015.
 */
function fillResult(from, slider, r, g, b) {
    if (r >= 0) {
        var rColor = Math.round(r).toString(), gColor = Math.round(g).toString(), bColor = Math.round(b).toString();
        res.fillStyle = "rgb(".concat(rColor).concat(", ").concat(gColor).concat(", ").concat(bColor).concat(")");
        res.fillRect(0, 0, resultCanvas.width, resultCanvas.width);
        fillCMYK2FromRGB(from, slider, r, g, b);
        fillCMYKFromRGB(from, slider, r, g, b);
        fillHSVFromRGB(from, slider, r, g, b);
    }
    fillLUVFromRGB(from, slider, r, g, b);
    fillXYZFromRGB(from, slider, r, g, b);
}
function fillHSVFromRGB(from, slider, r, g, b){
    var hsvColor = rgb2hsv(r, g, b);
    var h = Math.round(hsvColor.h);
    var s = Math.round(hsvColor.s);
    var v = Math.round(hsvColor.v);
    cone.rotation.y = -(hsvColor.h - 180)*Math.PI/180;
    if(r != 0 || g != 0 || b != 0) {
        fillHSVSquare(hsvColor.h);
    }
    if(slider === undefined || slider || (!slider && from != "hsv")) {
        hInput.value = h;
        sInput.value = s;
        vInput.value = v;
    }
    if(slider === undefined || !slider || (slider && from != "hsv")) {
        $("#hueSlider").slider("value", h);
        $("#valueSlider").slider("value", s);
        $("#saturationSlider").slider("value", v);
    }
}
function fillCMYK2FromRGB(from, slider, r, g, b){
    var cmykColor = rgb2cmyk2(r, g, b);
    var c = Math.round(cmykColor.c);
    var m = Math.round(cmykColor.m);
    var y = Math.round(cmykColor.y);
    var k = Math.round(cmykColor.k);
    if(slider === undefined || slider || (!slider && from != "cmyk2")) {
        c2Input.value = c;
        m2Input.value = m;
        y2Input.value = y;
        kInput.value = k;
    }
    if(slider === undefined || !slider || (slider && from != "cmyk2")) {
        $("#c2Slider").slider("value", c);
        c2Slider.value = c;
        $("#m2Slider").slider("value", m);
        m2Slider.value = m;
        $("#y2Slider").slider("value", y);
        y2Slider.value = y;
        $("#kSlider").slider("value", kInput.value);
        kSlider.value = k;
    }
}
function fillCMYKFromRGB(from, slider, r, g, b){
    var cmykColor = rgb2cmyk(r, g, b);
    //console.log('rgb to cmyk: ' + r + ' ' + g + ' ' + b + ' = ' + cmykColor.c + ' ' + cmykColor.m + ' ' + cmykColor.y + ' ' + cmykColor.k);
    var c = Math.round(cmykColor.c);
    var m = Math.round(cmykColor.m);
    var y = Math.round(cmykColor.y);
    if(!fastMode) fillMYSquare(c);
    if(slider === undefined || slider || (!slider && from != "cmyk")) {
        cInput.value = c;
        mInput.value = m;
        yInput.value = y;
        rInput.value = n - c;
        gInput.value = n - m;
        bInput.value = n - y;
        kReadOnly.value = Math.round(cmykColor.k);
    }
    if(slider === undefined || !slider || (slider && from != "cmyk")) {
        $("#cSlider").slider("value", c);
        cSlider.value = c;
        $("#mSlider").slider("value", m);
        mSlider.value = m;
        $("#ySlider").slider("value", y);
        ySlider.value = y;
    }
}
function fillXYZFromRGB(from, slider, r, g, b){
    var x, y, z;
    if(r >= 0) {
        var color = rgb2xyz(r, g, b);
        x = Math.round(color.x);
        y = Math.round(color.y);
        z = Math.round(color.z);
        if(from != "xyz"){
            if(!fastMode) fillXZSquare(y);
            xyzTable.style.border = "2px solid rgb(40, 22, 47)";
        }
    }
    if(slider === undefined || slider || (!slider && from != "xyz")) {
        x_input.value = r < 0 ? x_slider.value : x;
        y_input.value = r < 0 ? y_slider.value :  y;
        z_input.value = r < 0 ? z_slider.value :  z;
    }
    if(slider === undefined || !slider || (slider && from != "xyz")) {
        x = r < 0 ? x_input.value : x;
        y = r < 0 ? y_input.value : y;
        z = r < 0 ? z_input.value : z;
        $("#x_slider").slider("value", x);
        x_slider.value = x;
        $("#y_slider").slider("value", y);
        y_slider.value = y;
        $("#z_slider").slider("value", z);
        z_slider.value = z;
    }
}
function fillLUVFromRGB(from, slider, r, g, b){
    var l, u, v;
    if(r >= 0) {
        var color = rgb2luv(r, g, b);
        l = Math.round(color.l);
        u = Math.round(color.u);
        v = Math.round(color.v);
        if(from != "luv"){
            if(!fastMode) fillUVSquare(l);
            luvTable.style.border = "2px solid rgb(40, 22, 47)";
        }
    }

    if(slider === undefined || slider || (!slider && from != "luv")) {
        l_input.value = r < 0 ? l_slider.value : l;
        u_input.value = r < 0 ? u_slider.value : u;
        v_input.value = r < 0 ? v_slider.value : v;
    }
    if(slider === undefined || !slider || (slider && from != "luv")) {
        l = r < 0 ? l_input.value : l;
        u = r < 0 ? u_input.value : u;
        v = r < 0 ? v_input.value : v;
        $("#l_slider").slider("value", l);
        l_slider.value = l;
        $("#u_slider").slider("value", u);
        u_slider.value = u;
        $("#v_slider").slider("value", v);
        v_slider.value = v;
    }
}
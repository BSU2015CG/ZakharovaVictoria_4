/**
 * Created by User on 05.03.2015.
 */
(function() {
    $( "#hueSlider" ).slider({
        orientation: "vertical",
        min: 0,
        max: 359,
        value: 180,
        slide: function(event, ui) {
            if (event.originalEvent) {
                changeHue(ui.value);
            }
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) changeHue(ui.value);
        }
    });
    $( "#valueSlider" ).slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        value: 109,
        slide: function(event, ui) {
            vSlider.value = ui.value;
            fillFromHSVSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                vSlider.value = ui.value;
                fillFromHSVSlider();
            }
        }
    });
    $( "#saturationSlider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: 100,
        value: 100,
        slide: function(event, ui) {
            sSlider.value = ui.value;
            fillFromHSVSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                sSlider.value = ui.value;
                fillFromHSVSlider();
            }
        }
    });
    $( "#c2Slider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: n,
        value: n,
        slide: function(event, ui) {
            c2Slider.value = ui.value;
            fillFromCMYK2Slider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                c2Slider.value = ui.value;
                fillFromCMYK2Slider();
            }
        }
    });
    $( "#m2Slider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: n,
        value: 0,
        slide: function(event, ui) {
            m2Slider.value = ui.value;
            fillFromCMYK2Slider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                m2Slider.value = ui.value;
                fillFromCMYK2Slider();
            }
        }
    });
    $( "#y2Slider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: n,
        value: 0,
        slide: function(event, ui) {
            y2Slider.value = ui.value;
            fillFromCMYK2Slider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                y2Slider.value = ui.value;
                fillFromCMYK2Slider();
            }
        }
    });
    $( "#kSlider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: n,
        value: 0,
        slide: function(event, ui) {
            kSlider.value = ui.value;
            fillFromCMYK2Slider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                kSlider.value = ui.value;
                fillFromCMYK2Slider();
            }
        }
    });
    $( "#cSlider" ).slider({
        orientation: "vertical",
        min: 0,
        max: n,
        value: n,
        slide: function(event, ui) {
            changeMYSquare(ui.value);
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) changeMYSquare(ui.value);
        }
    });
    $( "#mSlider" ).slider({
        orientation: "vertical",
        min: 0,
        max: n,
        value: 0,
        slide: function(event, ui) {
            mSlider.value = ui.value;
            fillFromCMYKSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                mSlider.value = ui.value;
                fillFromCMYKSlider();
            }
        }
    });
    $( "#ySlider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: n,
        value: 0,
        slide: function(event, ui) {
            ySlider.value = ui.value;
            fillFromCMYKSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                ySlider.value = ui.value;
                fillFromCMYKSlider();
            }
        }
    });
    $( "#x_slider" ).slider({
        orientation: "vertical",
        min: 0,
        max: 242,
        value: 137,
        slide: function(event, ui) {
            x_slider.value = ui.value;
            fillFromXYZSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                x_slider.value = ui.value;
                fillFromXYZSlider();
            }
        }
    });
    $( "#y_slider" ).slider({
        orientation: "vertical",
        min: 0,
        max: 264,
        value: 201,
        slide: function(event, ui) {
            changeYZSquare(ui.value);
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) changeYZSquare(ui.value);
        }
    });
    $( "#z_slider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: 278,
        value: 273,
        slide: function(event, ui) {
            z_slider.value = ui.value;
            fillFromXYZSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                z_slider.value = ui.value;
                fillFromXYZSlider();
            }
        }
    });
    $( "#l_slider" ).slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        value: 93,
        slide: function(event, ui) {
            changeUVSquare(ui.value);
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) changeUVSquare(ui.value);
        }
    });
    $( "#u_slider" ).slider({
        orientation: "vertical",
        min: -200,
        max: 200,
        value: -94,
        slide: function(event, ui) {
            u_slider.value = ui.value;
            fillFromLUVSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                u_slider.value = ui.value;
                fillFromLUVSlider();
            }
        }
    });
    $( "#v_slider" ).slider({
        orientation: "horizontal",
        min: -200,
        max: 200,
        value: -8,
        slide: function(event, ui) {
            v_slider.value = ui.value;
            fillFromLUVSlider();
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                v_slider.value = ui.value;
                fillFromLUVSlider();
            }
        }
    });
    fillResult("init", undefined, 0, 255, 255);
})();
function fillFromCMYK2Slider(){
    return fillResultFromCMYK2(true, c2Slider.value, m2Slider.value, y2Slider.value, kSlider.value);
}
function fillFromCMYKSlider(){
    return fillResultFromCMYK(true, cSlider.value, mSlider.value, ySlider.value);
}
function fillFromHSVSlider(){
    return fillResultFromHSV(true, hSlider.value, sSlider.value, vSlider.value);
}
function fillFromHSVInput(){
    return fillResultFromHSV(false, hInput.value, sInput.value, vInput.value);
}
function fillFromCMYK2Input(){
    return fillResultFromCMYK2(false, c2Input.value, m2Input.value, y2Input.value, kInput.value);
}
function fillFromCMYKInput(){
    return fillResultFromCMYK(false, cInput.value, mInput.value, yInput.value);
}
function fillFromXYZSlider(){
    return fillResultFromXYZ(true, x_slider.value, y_slider.value, z_slider.value);
}
function fillFromXYZInput(){
    return fillResultFromXYZ(false, x_input.value, y_input.value, z_input.value);
}
function fillFromLUVSlider(){
    return fillResultFromLUV(true, parseFloat(l_slider.value), parseFloat(u_slider.value), parseFloat(v_slider.value));
}
function fillFromLUVInput(){
    return fillResultFromLUV(false, parseFloat(l_input.value), parseFloat(u_input.value), parseFloat(v_input.value));
}
function changeYZSquare(val){
    y_slider.value = val;
    if(!fastMode) fillXZSquare(val, true, false);
    fillFromXYZSlider();
}
function changeUVSquare(val){
    l_slider.value = val;
    if(!fastMode) fillUVSquare(val);
    fillFromLUVSlider();
}
function changeHue(val){
    hSlider.value = val;
    fillHSVSquare(val);
    fillFromHSVSlider();
}
function changeMYSquare(val){
    cSlider.value = val;
    if(!fastMode) fillMYSquare(val);
    fillFromCMYKSlider();
}
c2Input.onchange = function() {
    $('#c2Slider').slider('value', $(this).val());
    fillFromCMYK2Input();
};
m2Input.onchange = function() {
    $('#m2Slider').slider('value', $(this).val());
    fillFromCMYK2Input();
};
y2Input.onchange = function() {
    $('#y2Slider').slider('value', $(this).val());
    fillFromCMYK2Input();
};
kInput.onchange = function() {
    $('#kSlider').slider('value', $(this).val());
    fillFromCMYK2Input();
};
cInput.onchange = function() {
    $('#cSlider').slider('value', $(this).val());
    fillFromCMYKInput();
};
mInput.onchange = function() {
    $('#mSlider').slider('value', $(this).val());
    fillFromCMYKInput();
};
yInput.onchange = function() {
    $('#ySlider').slider('value', $(this).val());
    fillFromCMYKInput();
};
x_input.onchange = function() {
    $('#x_slider').slider('value', $(this).val());
    fillFromXYZInput();
};
y_input.onchange = function() {
    $('#y_slider').slider('value', $(this).val());
    if(!fastMode) fillXZSquare(parseInt($(this).val()));
    fillFromXYZInput();
};
z_input.onchange = function() {
    $('#z_slider').slider('value', $(this).val());
    fillFromXYZInput();
};
hInput.onchange = function() {
    $('#hueSlider').slider('value', $(this).val());
    fillFromHSVInput();
};
sInput.onchange = function() {
    $('#saturationSlider').slider('value', $(this).val());
    fillFromHSVInput();
};
vInput.onchange = function() {
    $('#valueSlider').slider('value', $(this).val());
    fillFromHSVInput();
};
l_input.onchange = function() {
    $('#l_slider').slider('value', $(this).val());
    if(!fastMode) fillUVSquare(parseInt($(this).val()));
    fillFromLUVInput();
};
u_input.onchange = function() {
    $('#u_slider').slider('value', $(this).val());
    fillFromLUVInput();
};
v_input.onchange = function() {
    $('#v_slider').slider('value', $(this).val());
    fillFromLUVInput();
};

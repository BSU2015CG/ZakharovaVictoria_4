(function() {
    $( "#brightnessSlider" ).slider({
        orientation: "horizontal",
        min: -255,
        max: 255,
        value: 0,
        slide: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                changeFromBrightnessSlider(ui.value);
            }
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                changeFromBrightnessSlider(ui.value);
            }
        }
    });
    $( "#contrastSlider" ).slider({
        orientation: "horizontal",
        min: 0,
        max: 255,
        value: 128,
        slide: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                changeFromContrastSlider(ui.value);
            }
        },
        change: function(event, ui) {
            if(event != undefined && event.originalEvent) {
                changeFromContrastSlider(ui.value);
            }
        }
    });
    function changeFromContrastSlider(level){
        contrast.value = level;
        changeContrastOrBrightness();
    }
    function changeFromBrightnessSlider(level){
        brightness.value = level;
        changeContrastOrBrightness();
    }
})();

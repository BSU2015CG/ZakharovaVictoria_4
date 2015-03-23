var blockWidth = topContainer.offsetWidth * 0.35;
var maxWidth = topContainer.offsetWidth / 2;
if(maxWidth > 360) maxWidth = 360;
var maxWidthString = maxWidth + "px";
var blockWidthString = blockWidth + "px";

var verticals = document.getElementsByClassName('vertical');
for(var i = 0; i < verticals.length; i++) {
    verticals[i].style.height = blockWidthString;
}



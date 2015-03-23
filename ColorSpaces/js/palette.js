/**
 * Created by User on 06.03.2015.
 */
function getRelativeCoords(event) {
    if (event.offsetX !== undefined && event.offsetY !== undefined)
    { return { x: event.offsetX, y: event.offsetY }; }
    return { x: event.layerX, y: event.layerY };
}
var onclick = function(e, canvas){
    var coords = getRelativeCoords(e);
    var canvasColor = canvas.getImageData(coords.x, coords.y, 1, 1).data;
    var r = canvasColor[0];
    var g = canvasColor[1];
    var b = canvasColor[2];
    fillResult("init", undefined, r, g, b);
}
var createClickListener = function(canvas){
    return function(e){
        onclick(e, canvas);
    }
}
svCanvas.addEventListener("click", createClickListener(sv));
xzCanvas.addEventListener("click", createClickListener(xz));
myCanvas.addEventListener("click", createClickListener(my));
uvCanvas.addEventListener("click", createClickListener(uv));

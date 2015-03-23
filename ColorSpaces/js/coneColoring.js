var coneGeometry = new THREE.CylinderGeometry(0, 35, 35, 360, 1, false);
function fillRange(i, bottom, r, g, b){
    var vertexIndex, face = coneGeometry.faces[i];
    for(var j = 0; j < 3; j++){
        vertexIndex = face[ faceIndices[j] ];
        var color = new THREE.Color( 0xffffff );
        if(j == 2){
            if(!bottom) color.setRGB(0.0, 0.0, 0.0);
            else color.setRGB(1.0, 1.0, 1.0);
        }
        else color.setRGB(r, g, b);
        face.vertexColors[j] = color;
    }
}
function colorCone(){
    var i;
    for ( i = 1; i < 120; i+=2 ){
        fillRange(i, false, 1, i/120.0, 0);
    }
    for ( i = 121; i < 240; i+=2 ){
        fillRange(i, false, 1-(i-120.0)/120.0, 1, 0);
    }
    for ( i = 241; i < 360; i+=2 ){
        fillRange(i, false, 0, 1, (i-240.0)/120.0);
    }
    for ( i = 361; i < 480; i+=2 ){
        fillRange(i, false, 0, 1-(i-360.0)/120.0, 1);
    }
    for ( i = 481; i < 600; i+=2 ){
        fillRange(i, false, (i-480.0)/120.0, 0, 1);
    }
    for ( i = 601; i < 720; i+=2 ){
        fillRange(i, false, 1, 0, 1-(i-600.0)/120.0);
    }
    for ( i = 720; i < 780; i++ ){
        fillRange(i, true, 1, (i-720.0)/60.0, 0);
    }
    for ( i = 780; i < 840; i++ ){
        fillRange(i, true, 1-(i-780.0)/60.0, 1, 0);
    }
    for ( i = 840; i < 900; i++ ){
        fillRange(i, true, 0, 1, (i-840.0)/60.0);
    }
    for ( i = 900; i < 960; i++ ){
        fillRange(i, true, 0, 1-(i-900.0)/60.0, 1);
    }
    for ( i = 960; i < 1020; i++ ){
        fillRange(i, true, (i-960.0)/60.0, 0, 1);
    }
    for ( i = 1020; i < 1080; i++ ){
        fillRange(i, true, 1, 0, 1-(i-1020.0)/60.0);
    }
}
colorCone();
var cone = new THREE.Mesh(coneGeometry, new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } ));
cone.rotation.x = 3.5;
cone.position.y = 40;
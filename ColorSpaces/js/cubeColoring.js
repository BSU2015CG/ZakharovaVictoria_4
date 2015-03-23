/**
 * Created by User on 06.03.2015.
 */
var faceIndices = [ 'a', 'b', 'c', 'd' ];
var cubeSize = 35;
var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
function setCubeGeometryColors() {
    for (var i = 0; i < cubeGeometry.vertices.length; i++) {
        var point = cubeGeometry.vertices[i];
        var color = new THREE.Color(0xffffff);
        color.setRGB(0.5 + point.x / cubeSize, 0.5 + point.y / cubeSize, 0.5 + point.z / cubeSize);
        cubeGeometry.colors[i] = color;
    }
}
function setCubeFaceVertexColors() {
    var key = kInput.value/n;
    var color, cmyColor, vertexIndex, face;
    for (var i = 0; i < cubeGeometry.faces.length; i++) {
        face = cubeGeometry.faces[i];
        for (var j = 0; j < 3; j++) {
            vertexIndex = face[faceIndices[j]];
            color = new THREE.Color( 0xffffff );
            cmyColor = cubeGeometry.colors[vertexIndex];
            color.setRGB(cmyColor.r, cmyColor.g, cmyColor.b);
            color.r *= (1.0 - key);
            color.g *= (1.0 - key);
            color.b *= (1.0 - key);
            face.vertexColors[j] = color;
        }
    }
}
setCubeGeometryColors();
setCubeFaceVertexColors();
var cube = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } ) );
cube.position.y = -60;
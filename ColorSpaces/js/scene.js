var scene = new THREE.Scene();
scene.add( cone );
scene.add( cube );
var camera = new THREE.OrthographicCamera(-40, 40, 100, -100, - 1, 500);
camera.position.z = 70;
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0x28162f );
renderer.setSize(topContainer.offsetWidth*0.2, topContainer.offsetWidth*0.5);
container3d.appendChild(renderer.domElement);

var render = function () {
    requestAnimationFrame(render);
    cube.geometry.colorsNeedUpdate = true;
    setCubeFaceVertexColors();
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
};
render();

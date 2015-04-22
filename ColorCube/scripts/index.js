var container, camera, scene, renderer, controls;
var fromR, fromG, fromB, toR, toG, toB, n = 16;

var storageEmpty = (localStorage.getItem("fromR") == undefined);
rFrom.value = rTo.min = storageEmpty ? 0 : localStorage["fromR"];
gFrom.value = gTo.min = storageEmpty ? 0 : localStorage["fromG"];
bFrom.value = bTo.min = storageEmpty ? 0 : localStorage["fromB"];
rTo.value = storageEmpty ? n : localStorage["toR"];
gTo.value = storageEmpty ? n : localStorage["toG"];
bTo.value = storageEmpty ? n : localStorage["toB"];
rTo.max = gTo.max = bTo.max = blocks.value = storageEmpty ? n : localStorage["n"];

init();
animate();

function init() {
    if( localStorage["n"] != blocks.value) {
        var inputs = document.getElementsByClassName("from");
        for(var i = 0; i < inputs.length; i++){
            inputs[i].value = 0;
        }
        inputs = document.getElementsByClassName("to");
        for(var i = 0; i < inputs.length-1; i++){
            inputs[i].value = inputs[i].max = blocks.value;
        }
    }
    localStorage["n"] = blocks.value;
    localStorage["fromR"] = rFrom.value;
    localStorage["fromG"] = gFrom.value;
    localStorage["fromB"] = bFrom.value;
    localStorage["toR"] = rTo.value;
    localStorage["toG"] = gTo.value;
    localStorage["toB"] = bTo.value;
    n = parseInt(localStorage["n"]);
    fromR = parseInt(localStorage["fromR"]);
    fromG = parseInt(localStorage["fromG"]);
    fromB = parseInt(localStorage["fromB"]);
    toR = parseInt(localStorage["toR"]);
    toG = parseInt(localStorage["toG"]);
    toB = parseInt(localStorage["toB"]);
    var distance = 4.7;
    var maxDistance = Math.max(toR - fromR, toG - fromG, toB - fromB);
    container = document.getElementById( 'container' );
    if(container.children.length > 0) {
        container.removeChild(container.children[0]);
    }
    camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 5, maxDistance * 100 );
    camera.position.z = maxDistance * 40;
    camera.position.x = -n*10;
    camera.position.y = n*10;

    scene = new THREE.Scene();
    var dr = toR - fromR, dg = toG - fromG, db = toB-fromB;
    var particles = (dr*dg + dg*db + dr*db + (dr-1)*(dg-1) + (dg-1)*(db-1) + (dr-1)*(db-1))*2;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array( particles * 3 );
    var colors = new Float32Array( particles * 3 );

    var cube = new THREE.Mesh(new THREE.BoxGeometry(distance * (dr-1.8-2), distance * (dg-1.8-2), distance * (db-1.8-2)),
        new THREE.MeshBasicMaterial( {color: 0x000000} ));
    cube.position.x -= 3.06;
    cube.position.y -= 3.06;
    cube.position.z -= 3.06;
    cube.overdraw = true;

    var i = 0;
    var sumR = (fromR+toR)/ 2, sumG = (fromG+toG)/ 2, sumB = (fromB+toB)/2;
    var addParticle = function(x, y, z) {
        positions[i] = (x - sumR)*distance;
        positions[i + 1] = (y - sumG)*distance;
        positions[i + 2] = (z - sumB)*distance;
        colors[i]   = x / n;
        colors[i + 1] = y / n;
        colors[i + 2] = z / n;
        i += 3;
    }
    for (var x = fromR; x < toR; x++) {
        for (var y = fromG; y < toG; y++) {
            addParticle(x, y, fromB);
            addParticle(x, y, toB-1);
        }
    }
    for (var y = fromG; y < toG; y++) {
        for (var z = fromB; z < toB; z++) {
            addParticle(fromR, y, z);
            addParticle(toR-1, y, z);
        }
    }
    for (var x = fromR; x < toR; x++) {
        for (var z = fromB; z < toB; z++) {
            addParticle(x, fromG, z);
            addParticle(x, toG-1, z);
        }
    }
    for (var x = fromR+1; x < toR-1; x++) {
        for (var y = fromG+1; y < toG-1; y++) {
            addParticle(x, y, fromB+1);
            addParticle(x, y, toB-2);
        }
    }
    for (var y = fromG+1; y < toG-1; y++) {
        for (var z = fromB+1; z < toB-1; z++) {
            addParticle(fromR+1, y, z);
            addParticle(toR-2, y, z);
        }
    }
    for (var x = fromR+1; x < toR-1; x++) {
        for (var z = fromB+1; z < toB-1; z++) {
            addParticle(x, fromG+1, z);
            addParticle(x, toG-2, z);
        }
    }
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
    var texture = THREE.ImageUtils.loadTexture('images/ball.png');
    texture.needsUpdate = true;
    var material = new THREE.ParticleBasicMaterial({
        size: 20,
        map: texture,
        vertexColors: THREE.VertexColors,
        alphaTest: 0.5
    });
    material.transparent = true;
    var particleSystem = new THREE.PointCloud( geometry, material );
    scene.add( particleSystem );
    scene.add(cube);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
    controls = new THREE.OrbitControls(camera, document, renderer.domElement);
    controls.addEventListener( 'change', render );
    controls.minDistance = maxDistance*10;
    controls.maxDistance = maxDistance*70;
    var console = document.getElementById("console");
    var log = function(info) {
        console.innerHTML = info;
    }
    var mouseVector = new THREE.Vector2();
    var rayCaster = new THREE.Raycaster();
    rayCaster.params.PointCloud.threshold = 2.5;
    var onDocumentMouseMove = function(e) {
        mouseVector.x = 2 * (e.clientX / renderer.domElement.width) - 1;
        mouseVector.y = 1 - 2 * (e.clientY / renderer.domElement.height);
        var vector = new THREE.Vector3(mouseVector.x, mouseVector.y, 0.5).unproject(camera);
        rayCaster.ray.set(camera.position, vector.sub(camera.position).normalize());
        intersects = rayCaster.intersectObject(particleSystem);
        if(intersects.length > 0) {
            var point = intersects[0].point,
                r = Math.round(point.x/distance + (fromR+toR)/2),
                g = Math.round(point.y/distance + (fromG+toG)/2),
                b = Math.round(point.z/distance + (fromB+toB)/2);
            if(r >= 0 && g >= 0 && b >= 0) {
                log('R: ' + r + ', G: ' + g + ', B: ' + b);
            } else log("");
        } else log("");
    }
    window.addEventListener( 'mousemove', onDocumentMouseMove);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
}

function render() {
    renderer.render( scene, camera );
}

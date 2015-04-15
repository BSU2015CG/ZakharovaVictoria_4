var container, camera, scene, renderer, controls;
var fromR, fromG, fromB, toR, toG, toB;
var n = parseInt(document.getElementById("n").value);
init();
animate();

function init() {
    n = parseInt(document.getElementById("n").value);
    rTo.max = gTo.max = bTo.max = rTo.value = gTo.value = bTo.value = n;
    var distance = 4.7;
    fromR = parseInt(rFrom.value), fromG = parseInt(gFrom.value), fromB = parseInt(bFrom.value),
        toR = parseInt(rTo.value), toG = parseInt(gTo.value), toB = parseInt(bTo.value);
    var maxDistance = Math.max(toR - fromR, toG - fromG, toB - fromB);
    container = document.getElementById( 'container' );
    if(container.children.length > 0) {
        container.removeChild(container.children[0]);
    }
    camera = new THREE.PerspectiveCamera( 27, window.innerWidth / window.innerHeight, 5, maxDistance * 100 );
    camera.position.z = maxDistance * 40;

    scene = new THREE.Scene();
    var dr = toR - fromR, dg = toG - fromG, db = toB-fromB;
    var particles = (dr*dg + dg*db + dr*db)*2;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array( particles * 3 );
    var colors = new Float32Array( particles * 3 );

    var cube = new THREE.Mesh(new THREE.BoxGeometry(distance * (dr-1.8), distance * (dg-1.8), distance * (db-1.8)),
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

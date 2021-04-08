//CONTROLS
var controls;
var stats;

function createStats() {
    stats = new Stats();
    stats.setMode(2); // 0: fps, 1: ms, 2memory
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "100px";
    stats.domElement.style.top = "10px";
    document.getElementById("myStats").appendChild(stats.domElement);
    return stats;
    }
 
function createPlane() {    
    var planeGeometry = new THREE.PlaneGeometry(10, 10, 1, 5);
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
}

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 10,20);
createPlane();


//Camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );        
//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls = new THREE.OrbitControls(camera, renderer.domElement);
createStats();



//cabeza

const Cab1 = new THREE.Mesh( new THREE.BoxGeometry(1.3,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab2 = new THREE.Mesh( new THREE.BoxGeometry(2.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab3 = new THREE.Mesh( new THREE.BoxGeometry(2.6,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab4 = new THREE.Mesh( new THREE.BoxGeometry(0.5,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08} ) );
const Cab5 = new THREE.Mesh( new THREE.BoxGeometry(2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab6 = new THREE.Mesh( new THREE.BoxGeometry(1.5,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab7 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab8 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab9 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab10 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.8,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab11 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab12 = new THREE.Mesh( new THREE.BoxGeometry(0.4,1.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab13 = new THREE.Mesh( new THREE.BoxGeometry(0.1,0.8,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab14 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab15 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab16 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Cab17 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );


const ojo1 = new THREE.Mesh( new THREE.BoxGeometry(0.8,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );
const ojo2 = new THREE.Mesh( new THREE.BoxGeometry(0.5,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );
const ojo3 = new THREE.Mesh( new THREE.BoxGeometry(1.1,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );
const ojo4 = new THREE.Mesh( new THREE.BoxGeometry(0.9,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );
const ojo5 = new THREE.Mesh( new THREE.BoxGeometry(0.5,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );
const ojo6 = new THREE.Mesh( new THREE.BoxGeometry(0.5,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ) );


Cab1.position.y = 3.3;
Cab1.position.x = 0;
Cab2.position.y = 3.1;
Cab2.position.x = 0;
Cab3.position.y = 2.9;
Cab3.position.x = 0;
Cab4.position.y = 2.7;
Cab4.position.x = -1.25;
Cab5.position.y = 2.7;
Cab5.position.x = 0;
Cab6.position.y = 2.5;
Cab6.position.x = 0.5;
Cab7.position.y = 2.4;
Cab7.position.x = -1.6;
Cab8.position.y = 1.7;
Cab8.position.x = -0.1;
Cab9.position.y = 1.7;
Cab9.position.x = 0.7;
Cab10.position.y = 1.8;
Cab10.position.x = -1.7;
Cab11.position.y = 1.7;
Cab11.position.x = -1.4;
Cab12.position.y = 1.4;
Cab12.position.x = -0.4;
Cab13.position.y = 1.6;
Cab13.position.x = 0.85;
Cab14.position.y = 1.7;
Cab14.position.x = 0.5;
Cab15.position.y = 1.7;
Cab15.position.x = 0.1;
Cab16.position.y = 1.8;
Cab16.position.x = 0.3;
Cab17.position.y = 1.4;
Cab17.position.x = 1;

ojo1.position.y = 2.7;
ojo1.position.x = -0.75;
ojo2.position.y = 2.7;
ojo2.position.x = 1.05;
ojo3.position.y = 2.4;
ojo3.position.x = -0.75;
ojo4.position.y = 2.5;
ojo4.position.x = 1.05;
ojo5.position.y = 2.3;
ojo5.position.x = 1.05;
ojo6.position.y = 2.1;
ojo6.position.x = -0.85;

scene.add( Cab1, Cab2,Cab3,Cab4,Cab5,Cab6,Cab7,Cab8,Cab9,Cab10,Cab11,Cab12,Cab13,Cab14,Cab15,Cab16,Cab17, ojo1,ojo2, ojo3,ojo4, ojo5,ojo6);

//cuerpo

const Body1 = new THREE.Mesh( new THREE.BoxGeometry(2.2,1.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body2 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body3 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body4 = new THREE.Mesh( new THREE.BoxGeometry(0.7,0.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body5 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body6 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body7 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body8 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body9 = new THREE.Mesh( new THREE.BoxGeometry(0.7,0.8,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body10 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.8,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body11 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.8,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body12 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body13 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body14 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body15 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body16 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body17 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body18 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body19 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body20 = new THREE.Mesh( new THREE.BoxGeometry(0.4,0.2,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body21 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body22 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body23 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body24 = new THREE.Mesh( new THREE.BoxGeometry(0.6,0.6,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body25 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1.4,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body26 = new THREE.Mesh( new THREE.BoxGeometry(0.2,0.9,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );
const Body27 = new THREE.Mesh( new THREE.BoxGeometry(0.2,1.1,0), new THREE.MeshBasicMaterial( { color: 0xFFBF08 } ) );


Body1.position.y = -0.2;
Body1.position.x = -0.2;
Body2.position.y = 1.3;
Body2.position.x = 0.3;
Body3.position.y = 0.7;
Body3.position.x = -0.1;
Body4.position.y = 0.9;
Body4.position.x = 0.35;
Body5.position.y = -0.1;
Body5.position.x = 1;
Body6.position.y = 0.1;
Body6.position.x = 1.2;
Body7.position.y = 0.7;
Body7.position.x = -0.7;
Body8.position.y = 1.5;
Body8.position.x = -1.2;
Body9.position.y = 1;
Body9.position.x = -1.15;
Body10.position.y = 0.2;
Body10.position.x = -1.4;
Body11.position.y = 0.4;
Body11.position.x = -1.6;
Body12.position.y = 1.1;
Body12.position.x = -1.7;
Body13.position.y = 0.9;
Body13.position.x = -1.9;
Body14.position.y = 0.3;
Body14.position.x = -2;
Body15.position.y = -0.6;
Body15.position.x = -2;
Body16.position.y = -0.2;
Body16.position.x = -1.8;
Body17.position.y = -0.4;
Body17.position.x = -1.6;
Body18.position.y = -0.7;
Body18.position.x = -1.7;
Body19.position.y = -1.1;
Body19.position.x = -1.1;
Body20.position.y = -1.1;
Body20.position.x = 0.7;
Body21.position.y = -1.4;
Body21.position.x = -1.2;
Body22.position.y = -1.4;
Body22.position.x = 0.8;
Body23.position.y = -1.9;
Body23.position.x = -1.4;
Body24.position.y = -1.9;
Body24.position.x = 1;
Body25.position.y = 0.3;
Body25.position.x = 1.4;
Body26.position.y = 1.6;
Body26.position.x = 1.35;
Body27.position.y = 1.7;
Body27.position.x = 1.45;



scene.add(Body1,Body2,Body3,Body4,Body5,Body6,Body7,Body8,Body9,Body10,Body11,Body12,Body13,Body14,Body15,Body16,Body17,Body18,Body19,Body20,Body21,Body22,Body23,Body24,Body25,Body26,Body27);



camera.position.z = 5;
    function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
   
    stats.update();
}
animate();
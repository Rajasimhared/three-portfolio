import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    BoxBufferGeometry,
    MeshBasicMaterial,
    Color
} from '../node_modules/three/src/Three.js';

// import {
//     OrbitControls
// } from 'three/examples/jsm/controls/OrbitControls.js';
// import {
//     GLTFLoader
// } from 'three/examples/jsm/loaders/GLTFLoader.js';

const container = document.querySelector('#scene-container');

const scene = new Scene();
scene.background = new Color('skyblue');

const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);


const length = 2;
const width = 2;
const depth = 2;

const geometry = new BoxBufferGeometry(length, width, depth);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera);

console.log('dsasdhssdsdsdsdsdd kjhsdjhj sdjh')
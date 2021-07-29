import {
    createScene
} from './components/scene.js';
import {
    createCube
} from './components/meshGroup.js';
import {
    createCamera
} from './components/camera.js';
import {
    createLights
} from './components/lights.js';

import {
    createRenderer
} from './systems/renderer.js';
import {
    Resizer
} from './systems/Resizer.js';
import {
    Loop
} from './systems/Loop.js';
import {
    createControls
} from './systems/controls.js';


class World {
    #camera;
    #scene;
    #renderer;
    #loop;
    constructor(container) {
        this.#camera = createCamera();
        this.#scene = createScene();
        this.#renderer = createRenderer();
        this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

        container.append(this.#renderer.domElement);

        const controls = createControls(this.#camera, this.#renderer.domElement);
        // controls.autoRotate = true;
        // controls.autoRotateSpeed = 10;
        // controls.target.set(1, 2, 3);
        // controls.enablePan = false;
        // controls.enableDamping = true;


        const cube = createCube();
        const {
            ambientLight,
            mainLight
        } = createLights();

        // this.#loop.updatables.push(cube);
        // this.#loop.updatables.push(this.#camera);
        this.#loop.updatables.push(controls);

        this.#scene.add(ambientLight, mainLight, cube);

        const resizer = new Resizer(container, this.#camera, this.#renderer);

    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }

    start() {
        this.#loop.start();
    }

    stop() {
        this.#loop.stop();
    }
}

export {
    World
};
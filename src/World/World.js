import {
    createScene
} from './components/scene.js';
import {
    createCube,
    createCube2
} from './components/cube.js';
import {
    createCamera
} from './components/camera.js';

import {
    createRenderer
} from './systems/renderer.js';
import {
    Resizer
} from './systems/Resizer.js';


class World {
    #camera;
    #scene;
    #renderer;
    constructor(container) {
        this.#camera = createCamera();
        this.#scene = createScene();
        this.#renderer = createRenderer();
        container.append(this.#renderer.domElement);

        const cube = createCube();
        this.#scene.add(cube);

        const cube2 = createCube2();
        this.#scene.add(cube2);

        const resizer = new Resizer(container, this.#camera, this.#renderer);

    }

    render() {
        this.#renderer.render(this.#scene, this.#camera);
    }
}

export {
    World
};
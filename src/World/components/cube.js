import {
    BoxBufferGeometry,
    Mesh,
    MeshBasicMaterial
} from 'three';

function createCube() {
    // create a geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);

    // create a default (white) Basic material
    const material = new MeshBasicMaterial();

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    return cube;
}

function createCube2() {
    // create a geometry
    const geometry = new BoxBufferGeometry(2, 2, 2);

    // create a default (white) Basic material
    const material = new MeshBasicMaterial({
        color: 0xffff00,
    });

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    cube.position.set(5, 0, 0);
    return cube;
}


export {
    createCube,
    createCube2
};
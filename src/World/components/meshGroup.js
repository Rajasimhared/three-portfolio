import {
    BoxBufferGeometry,
    Mesh,
    MathUtils,
    MeshStandardMaterial,
    TextureLoader
} from 'three';

function createMaterial() {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/textures/Rajasimha_Reddy.JPG',
    );

    console.log(texture)
    const material = new MeshStandardMaterial({
        map: texture,
        color: 'grey'
    });

    return material;
}



function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);

    const material = createMaterial();

    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(40);

    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        // cube.position.x += radiansPerSecond * delta % 10;
    };

    return cube;
}

export {
    createCube
};
import {
    PerspectiveCamera,
    MathUtils
} from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(0, 0, 10);

    let target = 20;
    const radiansPerSecond = MathUtils.degToRad(40);

    camera.tick = (delta) => {
        // increase the camera's rotation each frame

        // camera.rotation.z += radiansPerSecond * delta;
        // camera.rotation.x += radiansPerSecond * delta;
        // camera.rotation.y += radiansPerSecond * delta;
    };

    return camera;
}

export {
    createCamera
};
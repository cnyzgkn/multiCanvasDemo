import React from 'react';
import ReactDom from 'react-dom';

class View3D extends React.Component {
    constructor() {
        super();
    }

    /*
    init() {
        this.camera = new THREE.OrthographicCamera( this.canvasW / - 2, this.canvasW / 2, this.canvasH / 2, this.canvasH / - 2, -40000, 40000 );
        this.camera.position.set(0, 0, 10000);
        this.camera.up.set( 0, 0, 1 );
        this.camera.zoom = 0.03;
        this.camera.updateProjectionMatrix();

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.canvasW, this.canvasH );
        var canvas = document.getElementById('view3d');
        canvas.appendChild( this.renderer.domElement );

        // 环境光
        this.ambientlight = new THREE.AmbientLight(0xFFFFFF, 0.3);
        this.scene.add(this.ambientlight);

        //平行光源
        var directionalLight1 = new THREE.DirectionalLight(0xFFFFFF, .7);
        directionalLight1.position.set(1, 1.5, 1);
        this.scene.add(directionalLight1);

        var directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, .7);
        directionalLight2.position.set(-1, -1.5, -1);
        this.scene.add(directionalLight2);

        // CONTROLS
        this.cameraControls = new THREE.OrbitControls( this.camera, this.renderer.domElement );
        this.cameraControls.target.set( 0, 0, 0 );
        this.cameraControls.addEventListener( 'change', this.updateRender.bind(this) );

        this.updateRender();
    }

    updateRender() {
        this.renderer.render( this.scene, this.camera );
    }

    flush() {
        this.camera.left = this.canvasW / - 2;
        this.camera.right = this.canvasW / 2;
        this.camera.top = this.canvasH / 2;
        this.camera.bottom = this.canvasH / - 2;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.canvasW, this.canvasH );

        this.updateRender();
    }

    componentDidMount() {
        this.init();
    }

    componentDidUpdate() {
        this.flush();
    }
    */

    render() {
        const ret = (
            <div className={this.props.className} >
            </div>
        );

        this.canvasW = this.props.posStyle.width;
        this.canvasH = this.props.posStyle.height;

        return ret;
    }
}

export default View3D;

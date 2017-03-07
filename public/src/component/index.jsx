import React from 'react';
import ReactDom from 'react-dom';
import Body from "./Body.jsx"

class Index extends React.Component {
    constructor() {
        super();
        this.state = this.getState();
    }

    init() {
        this.setState(this.getState());
    }

    getState() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    onWindowResize() {
        this.setState(this.getState());
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false );
    }

    render() {
        if (this.state) {
            const bodyPosStyle = new StyleObject(0, 0, this.state.width, this.state.height);
            console.log("index this.state.width = " + this.state.width + " this.state.height = " + this.state.height);
            return (<Body className = "main" posStyle = {bodyPosStyle} />);
        }
    }
}


ReactDom.render(
    <Index />,
    document.getElementById('body')
)


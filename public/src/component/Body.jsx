import React from 'react';
import ReactDom from 'react-dom';
import Views from "./Views.jsx"
import TopPanel from "./TopPanel.jsx"
import LeftPanel from "./LeftPanel.jsx"
import BottomPanel from "./BottomPanel.jsx"
import ProjectPanel from "./ProjectPanel.jsx"
import FamilyPanel from "./FamilyPanel.jsx"
import FamilyButton from "./FamilyButton.jsx"

var projectPanelIndex = 0;

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.showProjectPanel = false;
        this.showFamilyPanel = false;
        this.divideCanvasMode = 0;
        this.state = this.getState();
        //console.log("Body this.props.posStyle.width = " + this.props.posStyle.width + " this.props.posStyle.height = " + this.props.posStyle.height);
    }

    getState() {
        return {
            showProjectPanel: this.showProjectPanel,
            showFamilyPanel: this.showFamilyPanel,
            width: this.props.posStyle.width,
            height: this.props.posStyle.height,
            divideCanvasMode: this.divideCanvasMode,
            bodyRefs: this.refs
        };
    }

    onWindowResize() {
        //console.log("Body onWindowResize");
        this.setState(this.getState());
    }

    componentDidMount() {
        //console.log("Body componentDidMount");
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.refs.views.reUpdate();
        this.setState(this.getState());
    }

    componentDidUpdate() {
        //console.log("Body componentDidUpdate");
        this.refs.views.reUpdate();
    }

    showOrHideProjectPanel() {
        this.showProjectPanel = !this.showProjectPanel;
        if(this.showProjectPanel)
            console.log("show Project Panel");
        else
            console.log("hide Project Panel");
        this.setState(this.getState());
    }

    showOrHideFamilyPanel() {
        this.showFamilyPanel = !this.showFamilyPanel;
        if(this.showFamilyPanel)
            console.log("show Family Panel");
        else
            console.log("hide Family Panel");
        this.setState(this.getState());
    }

    changeDivideCanvasMode(divideCanvasMode) {
        this.divideCanvasMode = divideCanvasMode;
        if(divideCanvasMode == 0)
            console.log("分成四屏" + divideCanvasMode);
        else if(divideCanvasMode == 1)
            console.log("左右分屏" + divideCanvasMode);
        else if(divideCanvasMode == 2)
            console.log("上下分屏" + divideCanvasMode);
        else if(divideCanvasMode == 3)
            console.log("分成三屏" + divideCanvasMode);
        this.setState(this.getState());
    }

    getViewsPosStyle() {
        return this.props.posStyle;
    }

    render() {
        console.log("body render");
        return (
            <div id="FullContainer" className = {this.props.className} >
                <TopPanel showOrHideProjectPanel={this.showOrHideProjectPanel.bind(this)}  ref="topPanel" />

                <div id="content">
                    <div id="wrap">
                        <LeftPanel changeDivideCanvasMode={this.changeDivideCanvasMode.bind(this)}  ref="leftPanel" />
                        <div id="ViewsDiv">
                            <Views ref="views" viewsWidth={this.state.width} viewsHeight={this.state.height} posStyle={this.getViewsPosStyle()}
                                divideCanvasMode={this.state.divideCanvasMode} bodyRefs={this.state.bodyRefs} />
                        </div>
                        <div id="familyButtonDiv">
                                <FamilyButton showOrHideFamilyPanel={this.showOrHideFamilyPanel.bind(this)} />             
                        </div>
                        {
                            this.state.showFamilyPanel ? <FamilyPanel /> : null 
                        }
                    </div>
                </div>

                {
                    this.state.showProjectPanel ? <ProjectPanel /> : null
                } 

                <BottomPanel />
            </div>
        );
    }
}

export default Body;

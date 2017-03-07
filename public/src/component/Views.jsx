import React from 'react';
import ReactDom from 'react-dom';
import View3D from './View3D.jsx';
import ViewSelectGroup from "./ViewSelectGroup.jsx"

import {Button, Glyphicon} from "react-bootstrap"

class Views extends React.Component {
    constructor() {
        super();
        this.isLoad = false;
        this.state = this.getState();
    }

    getState() {
        return {
            isLoad: this.isLoad
        };
    }

    reUpdate(){
        if(!this.isLoad)
        {
            this.isLoad = true;
            this.coordinate = this.refs.targetDiv.getBoundingClientRect();
            this.setState(this.getState());
        }
    }

    resizeX(x) {
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;
        //console.log("4 Views width = " + width + " height = " + height + " top = " + top + " bottom = " + bottom + " left = " + left + " right = " + right);
        
        if(this.props.divideCanvasMode == 0)
        {
            var leftPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.leftPanel);
            var leftPanelRect = leftPanelDom.getBoundingClientRect();
            //canvas0 canvas2 on the left
            this.refs.canvas0.style.width = x - leftPanelRect.width + 'px';
            this.refs.canvas2.style.width = x - leftPanelRect.width + 'px';
            //limit canvas0 canvas2 position
            if(parseFloat(this.refs.canvas0.style.right) < leftPanelRect.width)
                this.refs.canvas0.style.right = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas0.style.right) > right)
                this.refs.canvas0.style.right = right + 'px';
            if(parseFloat(this.refs.canvas0.style.width) > width)
                this.refs.canvas0.style.width = width + 'px';
            if(parseFloat(this.refs.canvas2.style.right) < leftPanelRect.width)
                this.refs.canvas2.style.right = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas2.style.right) > right)
                this.refs.canvas2.style.right = right + 'px';
            if(parseFloat(this.refs.canvas2.style.width) > width)
                this.refs.canvas2.style.width = width + 'px';

            // resizerX in the middle
            this.refs.resizerX.style.left = x + 'px';
            //limit resizerX position
            if(parseFloat(this.refs.resizerX.style.left) < leftPanelRect.width)
                this.refs.resizerX.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.resizerX.style.left) > right)
                this.refs.resizerX.style.left = right + 'px';

            //canvas1 canvas3 on the right
            this.refs.canvas1.style.left = x + parseFloat(this.refs.resizerX.style.width) + 'px';
            this.refs.canvas1.style.width = right - x + 'px';
            this.refs.canvas3.style.left = x + parseFloat(this.refs.resizerX.style.width) + 'px';
            this.refs.canvas3.style.width = right - x + 'px';
            //limit canvas1 canvas3 position
            if(parseFloat(this.refs.canvas1.style.left) < leftPanelRect.width)
                this.refs.canvas1.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas1.style.left) > right)
                this.refs.canvas1.style.left = right + 'px';
            if(parseFloat(this.refs.canvas1.style.width) > width)
                this.refs.canvas1.style.width = width + 'px';
            if(parseFloat(this.refs.canvas3.style.left) < leftPanelRect.width)
                this.refs.canvas3.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas3.style.left) > right)
                this.refs.canvas3.style.left = right + 'px';
            if(parseFloat(this.refs.canvas3.style.width) > width)
                this.refs.canvas3.style.width = width + 'px';
        }else if(this.props.divideCanvasMode == 1)
        {
            var leftPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.leftPanel);
            var leftPanelRect = leftPanelDom.getBoundingClientRect();
            //canvas0 on the left
            this.refs.canvas0.style.width = x - leftPanelRect.width + 'px';
            //limit canvas0 position
            if(parseFloat(this.refs.canvas0.style.right) < leftPanelRect.width)
                this.refs.canvas0.style.right = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas0.style.right) > right)
                this.refs.canvas0.style.right = right + 'px';
            if(parseFloat(this.refs.canvas0.style.width) > width)
                this.refs.canvas0.style.width = width + 'px';

            // resizerX in the middle
            this.refs.resizerX.style.left = x + 'px';
            //limit resizerX position
            if(parseFloat(this.refs.resizerX.style.left) < leftPanelRect.width)
                this.refs.resizerX.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.resizerX.style.left) > right)
                this.refs.resizerX.style.left = right + 'px';

            //canvas1 on the right
            this.refs.canvas1.style.left = x + parseFloat(this.refs.resizerX.style.width) + 'px';
            this.refs.canvas1.style.width = right - x + 'px';
            //limit canvas1 position
            if(parseFloat(this.refs.canvas1.style.left) < leftPanelRect.width)
                this.refs.canvas1.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas1.style.left) > right)
                this.refs.canvas1.style.left = right + 'px';
            if(parseFloat(this.refs.canvas1.style.width) > width)
                this.refs.canvas1.style.width = width + 'px';
        }if(this.props.divideCanvasMode == 3)
        {
            var leftPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.leftPanel);
            var leftPanelRect = leftPanelDom.getBoundingClientRect();
            //canvas0 canvas1 on the left
            this.refs.canvas0.style.width = x - leftPanelRect.width + 'px';
            this.refs.canvas1.style.width = x - leftPanelRect.width + 'px';
            //limit canvas0 canvas1 position
            if(parseFloat(this.refs.canvas0.style.right) < leftPanelRect.width)
                this.refs.canvas0.style.right = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas0.style.right) > right)
                this.refs.canvas0.style.right = right + 'px';
            if(parseFloat(this.refs.canvas0.style.width) > width)
                this.refs.canvas0.style.width = width + 'px';
            if(parseFloat(this.refs.canvas1.style.right) < leftPanelRect.width)
                this.refs.canvas1.style.right = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas1.style.right) > right)
                this.refs.canvas1.style.right = right + 'px';
            if(parseFloat(this.refs.canvas1.style.width) > width)
                this.refs.canvas1.style.width = width + 'px';

            // resizerX in the middle vertically
            this.refs.resizerX.style.left = x + 'px';
            //limit resizerX position
            if(parseFloat(this.refs.resizerX.style.left) < leftPanelRect.width)
                this.refs.resizerX.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.resizerX.style.left) > right)
                this.refs.resizerX.style.left = right + 'px';

            // resizerY in the middle horizontally
            this.refs.resizerY.style.width = x - leftPanelRect.width + 'px';
            //limit resizerY width
            if(parseFloat(this.refs.resizerY.style.width) > width)
                this.refs.resizerY.style.width = width + 'px';

            //canvas2 on the right
            this.refs.canvas2.style.left = x + parseFloat(this.refs.resizerX.style.width) + 'px';
            this.refs.canvas2.style.width = right - x + 'px';
            //limit canvas2 position
            if(parseFloat(this.refs.canvas2.style.left) < leftPanelRect.width)
                this.refs.canvas2.style.left = leftPanelRect.width + 'px';
            if(parseFloat(this.refs.canvas2.style.left) > right)
                this.refs.canvas2.style.left = right + 'px';
            if(parseFloat(this.refs.canvas2.style.width) > width)
                this.refs.canvas2.style.width = width + 'px';
        }
    }

    resizeY(y) {
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;
        //console.log("4 Views width = " + width + " height = " + height + " top = " + top + " bottom = " + bottom + " left = " + left + " right = " + right);
        
        if(this.props.divideCanvasMode == 0)
        {
            var topPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.topPanel);
            var topPanelRect = topPanelDom.getBoundingClientRect();
            //canvas0 canvas1 on the top
            this.refs.canvas0.style.height = y - topPanelRect.height + 'px';
            this.refs.canvas1.style.height = y - topPanelRect.height + 'px';
            //limit canvas0 canvas1 position
            if(parseFloat(this.refs.canvas0.style.top) < topPanelRect.height)
                this.refs.canvas0.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas0.style.bottom) > bottom)
                this.refs.canvas0.style.bottom = bottom + 'px';
            if(parseFloat(this.refs.canvas0.style.height) > height)
                this.refs.canvas0.style.height = height + 'px';
            if(parseFloat(this.refs.canvas1.style.top) < topPanelRect.height)
                this.refs.canvas1.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas1.style.bottom) > bottom)
                this.refs.canvas1.style.bottom = bottom + 'px';
            if(parseFloat(this.refs.canvas1.style.height) > height)
                this.refs.canvas1.style.height = height + 'px';

            // resizerY in the middle
            this.refs.resizerY.style.top = y + 'px';
            //limit resizerY position
            if(parseFloat(this.refs.resizerY.style.top) < topPanelRect.height)
                this.refs.resizerY.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.resizerY.style.top) > bottom)
                this.refs.resizerY.style.top = bottom + 'px';

            //canvas2 canvas3 on the bottom
            this.refs.canvas2.style.top = y + parseFloat(this.refs.resizerY.style.height) + 'px';
            this.refs.canvas2.style.height = bottom - y + 'px';
            this.refs.canvas3.style.top = y + parseFloat(this.refs.resizerY.style.height) + 'px';
            this.refs.canvas3.style.height = bottom - y + 'px';
            //limit canvas2 canvas3 position
            if(parseFloat(this.refs.canvas2.style.top) < topPanelRect.height)
                this.refs.canvas2.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas2.style.top) > bottom)
                this.refs.canvas2.style.top = bottom + 'px';
            if(parseFloat(this.refs.canvas2.style.height) > height)
                this.refs.canvas2.style.height = height + 'px';
            if(parseFloat(this.refs.canvas3.style.top) < topPanelRect.height)
                this.refs.canvas3.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas3.style.top) > bottom)
                this.refs.canvas3.style.top = bottom + 'px';
            if(parseFloat(this.refs.canvas3.style.height) > height)
                this.refs.canvas3.style.height = height + 'px';
        }else if(this.props.divideCanvasMode == 2)
        {
            var topPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.topPanel);
            var topPanelRect = topPanelDom.getBoundingClientRect();
            //canvas0 on the top
            this.refs.canvas0.style.height = y - topPanelRect.height + 'px';
            //limit canvas0 position
            if(parseFloat(this.refs.canvas0.style.top) < topPanelRect.height)
                this.refs.canvas0.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas0.style.bottom) > bottom)
                this.refs.canvas0.style.bottom = bottom + 'px';
            if(parseFloat(this.refs.canvas0.style.height) > height)
                this.refs.canvas0.style.height = height + 'px';

            // resizerY in the middle
            this.refs.resizerY.style.top = y + 'px';
            //limit resizerY position
            if(parseFloat(this.refs.resizerY.style.top) < topPanelRect.height)
                this.refs.resizerY.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.resizerY.style.top) > bottom)
                this.refs.resizerY.style.top = bottom + 'px';

            //canvas1 on the bottom
            this.refs.canvas1.style.top = y + parseFloat(this.refs.resizerY.style.height) + 'px';
            this.refs.canvas1.style.height = bottom - y + 'px';

            if(parseFloat(this.refs.canvas1.style.top) < topPanelRect.height)
                this.refs.canvas1.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas1.style.top) > bottom)
                this.refs.canvas1.style.top = bottom + 'px';
            if(parseFloat(this.refs.canvas1.style.height) > height)
                this.refs.canvas1.style.height = height + 'px';
        }else if(this.props.divideCanvasMode == 3)
        {
            var topPanelDom = ReactDOM.findDOMNode(this.props.bodyRefs.topPanel);
            var topPanelRect = topPanelDom.getBoundingClientRect();
            //canvas0 on the top
            this.refs.canvas0.style.height = y - topPanelRect.height + 'px';
            //limit canvas0 position
            if(parseFloat(this.refs.canvas0.style.top) < topPanelRect.height)
                this.refs.canvas0.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas0.style.bottom) > bottom)
                this.refs.canvas0.style.bottom = bottom + 'px';
            if(parseFloat(this.refs.canvas0.style.height) > height)
                this.refs.canvas0.style.height = height + 'px';

            // resizerY in the middle
            this.refs.resizerY.style.top = y + 'px';
            //limit resizerY position
            if(parseFloat(this.refs.resizerY.style.top) < topPanelRect.height)
                this.refs.resizerY.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.resizerY.style.top) > bottom)
                this.refs.resizerY.style.top = bottom + 'px';

            //canvas1 on the bottom
            this.refs.canvas1.style.top = y + parseFloat(this.refs.resizerY.style.height) + 'px';
            this.refs.canvas1.style.height = bottom - y + 'px';
            if(parseFloat(this.refs.canvas1.style.top) < topPanelRect.height)
                this.refs.canvas1.style.top = topPanelRect.height + 'px';
            if(parseFloat(this.refs.canvas1.style.top) > bottom)
                this.refs.canvas1.style.top = bottom + 'px';
            if(parseFloat(this.refs.canvas1.style.height) > height)
                this.refs.canvas1.style.height = height + 'px';
        }
    }

    componentDidUpdate() {
        console.log("Views componentDidUpdate");
        this.isLoad = false;
        if(this.props.divideCanvasMode == 1)
        {
            resizerX("resizerX", function (e) {
                this.resizeX(e.pageX);
            }.bind(this));
        }else if(this.props.divideCanvasMode == 2)
        {
            resizerY("resizerY", function (e) {
                this.resizeY(e.pageY);
            }.bind(this));
        }else if(this.props.divideCanvasMode == 0 || this.props.divideCanvasMode == 3)
        {
            resizerX("resizerX", function (e) {
                this.resizeX(e.pageX);
            }.bind(this));
            resizerY("resizerY", function (e) {
                this.resizeY(e.pageY);
            }.bind(this));
        }
    }

    componentWillUpdate() {
        //console.log("Views componentWillUpdate");
        this.coordinate = this.refs.targetDiv.getBoundingClientRect();
    }

    get4ViewsPosStyle(index) {
        console.log("get4ViewsPosStyle");
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        let ret;
        switch(index)
        {
            case 0:
            ret = new StyleObject(top, left, width/2, height/2);
            break;
            case 1:
            ret = new StyleObject(top, left+width/2+2, width/2, height/2);
            break;
            case 2:
            ret = new StyleObject(top+height/2+2, left, width/2, height/2);
            break;
            case 3:
            ret = new StyleObject(top+height/2+2, left+width/2+2, width/2, height/2);
            break;
            default:
            break;
        }
        return ret;
    }

    getLeftRightViewsPosStyle(index) {
        console.log("getLeftRightViewsPosStyle");
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        let ret;
        switch(index)
        {
            case 0:
            ret = new StyleObject(top, left, width/2, height);
            break;
            case 1:
            ret = new StyleObject(top, left+width/2+1, width/2, height);
            break;
            default:
            break;
        }
        return ret;
    }

    getTopBottomViewsPosStyle(index) {
        console.log("getTopBottomViewsPosStyle");
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        let ret;
        switch(index)
        {
            case 0:
            ret = new StyleObject(top, left, width, height/2);
            break;
            case 1:
            ret = new StyleObject(top+height/2+1, left, width, height/2);
            break;
            return ret;
            default:
            break;
        }
        return ret;
    }

    get3ViewsPosStyle(index) {
        console.log("get3ViewsPosStyle");
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        let ret;
        switch(index)
        {
            case 0:
            ret = new StyleObject(top, left, width/2, height/2);
            break;
            case 1:
            ret = new StyleObject(top+height/2+1, left, width/2, height/2);
            break;
            case 2:
            ret = new StyleObject(top, left+width/2+1, width/2, height);
            break;
            default:
            break;
        }
        return ret;
    }

    getResizerXPosStyle(index) {
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        return new StyleObject(top, left+width/2, 2, height);
    }

    getResizerYPosStyle(index) {
        var thisRect = this.coordinate;
        let width = thisRect.width;
        let height = thisRect.height;
        let top = thisRect.top;
        let bottom = thisRect.bottom;
        let left = thisRect.left;
        let right = thisRect.right;

        if(this.props.divideCanvasMode == 0 || this.props.divideCanvasMode == 1 || this.props.divideCanvasMode == 2)
            return new StyleObject(top+height/2, left, width, 2);
        else if(this.props.divideCanvasMode == 3)
            return new StyleObject(top+height/2, left, width/2, 2);
    }

    render() {
        if(this.state.isLoad == false)
        {
            console.log("Views render empty div");
            return (
                <div id="viewContainer" ref="targetDiv" className={this.props.className}> </div>  
            );
        }
        else
        {
            if(this.props.divideCanvasMode == 0)
            {
                console.log("Views render four canvas");
                return (
                    <div id="viewContainer" ref="targetDiv" className="4CanvasViewContainer"> 
                        <div id="canvas0" style={this.get4ViewsPosStyle(0).toStyle()} ref="canvas0" > 
                            <View3D className="view" posStyle = {this.get4ViewsPosStyle(0)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas1" style={this.get4ViewsPosStyle(1).toStyle()} ref="canvas1" > 
                            <View3D className="view" posStyle = {this.get4ViewsPosStyle(1)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas2" style={this.get4ViewsPosStyle(2).toStyle()} ref="canvas2" > 
                            <View3D className="view" posStyle = {this.get4ViewsPosStyle(2)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas3" style={this.get4ViewsPosStyle(3).toStyle()} ref="canvas3" > 
                            <View3D className="view" posStyle = {this.get4ViewsPosStyle(3)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="resizerX" style={this.getResizerXPosStyle(0).toStyle()} ref="resizerX"></div>
                        <div id="resizerY" style={this.getResizerYPosStyle(0).toStyle()} ref="resizerY"></div>
                    </div>
                );
            }
            else if(this.props.divideCanvasMode == 1)
            {
                console.log("Views render left right canvas");
                return (
                    <div id="viewContainer" ref="targetDiv" className={this.props.className}> 
                        <div id="canvas0" style={this.getLeftRightViewsPosStyle(0).toStyle()} ref="canvas0" > 
                            <View3D className="view" posStyle = {this.getLeftRightViewsPosStyle(0)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas1" style={this.getLeftRightViewsPosStyle(1).toStyle()} ref="canvas1" > 
                            <View3D className="view" posStyle = {this.getLeftRightViewsPosStyle(1)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="resizerX" style={this.getResizerXPosStyle(1).toStyle()} ref="resizerX"></div>
                    </div>
                );
            }
            else if(this.props.divideCanvasMode == 2)
            {
                console.log("Views render top bottom canvas");
                return (
                    <div id="viewContainer" ref="targetDiv" className={this.props.className}> 
                        <div id="canvas0" style={this.getTopBottomViewsPosStyle(0).toStyle()} ref="canvas0" > 
                            <View3D className="view" posStyle = {this.getTopBottomViewsPosStyle(0)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas1" style={this.getTopBottomViewsPosStyle(1).toStyle()} ref="canvas1" > 
                            <View3D className="view" posStyle = {this.getTopBottomViewsPosStyle(1)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="resizerY" style={this.getResizerYPosStyle(2).toStyle()} ref="resizerY"></div>
                    </div>
                );
            }
            else if(this.props.divideCanvasMode == 3)
            {
                console.log("Views render three canvas");
                return (
                    <div id="viewContainer" ref="targetDiv" className={this.props.className}> 
                        <div id="canvas0" style={this.get3ViewsPosStyle(0).toStyle()} ref="canvas0" > 
                            <View3D className="view" posStyle = {this.get3ViewsPosStyle(0)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas1" style={this.get3ViewsPosStyle(1).toStyle()} ref="canvas1" > 
                            <View3D className="view" posStyle = {this.get3ViewsPosStyle(1)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="canvas2" style={this.get3ViewsPosStyle(2).toStyle()} ref="canvas2" > 
                            <View3D className="view" posStyle = {this.get3ViewsPosStyle(2)} />
                            <ViewSelectGroup />
                            <Button className="viewFullScreen"><Glyphicon glyph="fullscreen" /></Button> 
                        </div>
                        <div id="resizerX" style={this.getResizerXPosStyle(3).toStyle()} ref="resizerX"></div>
                        <div id="resizerY" style={this.getResizerYPosStyle(3).toStyle()} ref="resizerY"></div>
                    </div>
                );
            }
        }
    }

}

export default Views;

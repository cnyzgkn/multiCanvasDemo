import React from 'react';
import ReactDom from 'react-dom';

import {Panel, ButtonToolbar, ButtonGroup, Button, FormGroup, Checkbox} from "react-bootstrap"
    
class LeftPanel extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <Panel id="LeftPanel" defaultExpanded bsStyle="primary">
                <ButtonToolbar>
                    <ButtonGroup vertical>
                        <Button>移动</Button>
                        <Button>旋转</Button>
                        <Button>缩放</Button>
                        <Button>复制</Button>
                        <Button>阵列</Button>
                        <Button>对齐</Button>
                        <Button>镜像</Button>
                        <Button>修剪</Button>
                        <Button>延长</Button>
                        <Button>打断</Button>
                    </ButtonGroup>
                    <ButtonGroup vertical>
                        <Button id="divide-four-canvas" onClick={()=>{this.props.changeDivideCanvasMode(0)}}>分成四屏</Button>
                        <Button id="divide-left-right-canvas" onClick={()=>{this.props.changeDivideCanvasMode(1)}}>左右分屏</Button>
                        <Button id="divide-top-bottom-canvas" onClick={()=>{this.props.changeDivideCanvasMode(2)}}>上下分屏</Button>
                        <Button id="divide-three-canvas" onClick={()=>{this.props.changeDivideCanvasMode(3)}}>分成三屏</Button> 
                    </ButtonGroup>
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default LeftPanel;

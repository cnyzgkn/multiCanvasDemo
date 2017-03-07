import React from 'react';
import ReactDom from 'react-dom';

import {Panel, ButtonToolbar, ButtonGroup, Button, DropdownButton, Radio, MenuItem, FormGroup, Glyphicon} from "react-bootstrap"
    
class TopPanel extends React.Component {
    constructor(){
        super();
        this.showExtrudePanel = false;
        this.state = this.getState();
    }

    getState() {
        return {
            showExtrudePanel: this.showExtrudePanel
        };
    }

    showExtrudePanelFunction() {
        console.log("show extrude Panel");
        this.showExtrudePanel = true;
        this.setState(this.getState());
    }

    hideExtrudePanelFunction() {
        console.log("hide extrude Panel");
        this.showExtrudePanel = false;
        this.setState(this.getState());
    }
    
    render() {
        var mainPanel = (
            <div>
                <ButtonGroup>
                    <DropdownButton title="构件选择" id="part">
                        <MenuItem>墙</MenuItem>
                        <MenuItem>门</MenuItem>
                        <MenuItem>柱</MenuItem>
                        <MenuItem>窗</MenuItem>
                        <MenuItem>楼板</MenuItem>
                        <MenuItem>屋顶</MenuItem>
                        <MenuItem>楼梯</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
                <ButtonGroup>
                    <FormGroup>
                        <Radio inline>平行约束</Radio>
                        <Radio inline>距离约束</Radio>
                        <Radio inline>相切约束</Radio>
                        <Radio inline>角度约束</Radio>
                    </FormGroup>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>退出</Button>
                </ButtonGroup>
            </div>
        );

        var extrudePanel = (
            <div>
                <ButtonGroup>
                    <Button onClick={this.hideExtrudePanelFunction.bind(this)} ><Glyphicon glyph="ok" /></Button>
                    <Button onClick={this.hideExtrudePanelFunction.bind(this)} ><Glyphicon glyph="remove" /></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button ><Glyphicon glyph="envelope" /></Button>
                    <Button ><Glyphicon glyph="road" /></Button>
                    <Button ><Glyphicon glyph="book" /></Button>
                    <Button ><Glyphicon glyph="edit" /></Button>
                    <Button ><Glyphicon glyph="repeat" /></Button>
                    <Button ><Glyphicon glyph="play-circle" /></Button>
                    <Button ><Glyphicon glyph="move" /></Button>
                </ButtonGroup>
            </div>
        );

        return (
            <Panel id="TopPanel" defaultExpanded bsStyle="primary">
                <ButtonToolbar id="TopPanelToolbar">
                    <ButtonGroup>
                        <Button onClick={this.props.showOrHideProjectPanel} >LOGO</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>新建</Button>
                        <Button>保存</Button>
                        <Button>撤销</Button>
                        <Button>重做</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button  onClick={this.showExtrudePanelFunction.bind(this)} >拉伸体</Button>
                        <Button>旋转体</Button>
                        <Button>融合体</Button>
                    </ButtonGroup>
                    {
                        this.state.showExtrudePanel ? extrudePanel : mainPanel 
                    }
                    
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default TopPanel;

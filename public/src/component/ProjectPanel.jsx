import React from 'react';
import ReactDom from 'react-dom';

import {Panel, Tab, Tabs, Form, FormGroup, FormControl, ControlLabel, Nav, NavItem, Image, Thumbnail, Grid, Row, Col, ButtonGroup, Button, Glyphicon, Clearfix} from "react-bootstrap"
    
class ProjectPanel extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div id="ProjectPanel" >
                <FormGroup>
                    <h3 id="userName">User Name</h3>
                    <h3 id="projectPanelID">ID:XXXX</h3>
                </FormGroup>

                <Tab.Container id="projectTabContainer" defaultActiveKey="first">
                    <div>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="first">个人项目</NavItem>
                            <NavItem eventKey="second">协同项目</NavItem>
                        </Nav>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                            <div>
                                <Grid id="projectGrid" className="container-fluid" >
                                    <Row>
                                        <Col sm={1} sm={1} >
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project01</p>
                                        </Col>
                                        <Col sm={1} sm={1} >
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project02</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={1} sm={1} >
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project03</p>
                                        </Col>
                                        <Col sm={1} sm={1} >
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project04</p>
                                        </Col>
                                    </Row>
                                </Grid>
                                </div>
                            {/*
                                <Grid>
                                    <div>
                                        <div class="col-sm-1">
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project01</p>
                                        </div>
                                        <div class="col-sm-1">
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project02</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="col-sm-1">
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project03</p>
                                        </div>
                                        <div class="col-sm-1">
                                            <Thumbnail src="src/pic/small.png" alt="57x60"/>
                                            <p>Project04</p>
                                        </div>
                                    </div>
                                </Grid>
                            */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div>
                                    <Image src="src/pic/middle.png" responsive/>
                                    <p>Project01</p>
                                    <Image src="src/pic/middle.png" responsive/>
                                    <p>Project02</p>
                                    <Image src="src/pic/middle.png" responsive/>
                                    <p>Project03</p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                        <div id="projectBottomPanel">
                            <p>Project02有数据更新</p>
                            <ButtonGroup>
                                <Button ><Glyphicon glyph="plus" /></Button>
                                <Button ><Glyphicon glyph="trash" /></Button>
                                <Button ><Glyphicon glyph="refresh" /></Button>
                                <Button ><Glyphicon glyph="align-justify" /></Button>
                                <Button ><Glyphicon glyph="th-large" /></Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Tab.Container>

            </div>
        );
    }
}

export default ProjectPanel;

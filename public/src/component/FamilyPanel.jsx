import React from 'react';
import ReactDom from 'react-dom';

import {Button, ButtonGroup, DropdownButton, Tab, Tabs, Form, FormGroup, FormControl, ControlLabel, Nav, Navbar, NavItem, Image, Thumbnail, Grid, Row, Col, MenuItem} from "react-bootstrap"
    
class FamilyPanel extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        var familyTree = [
          {
            text: 'FastEnd 1',
            nodes: [
              {
                text: 'MateCon 1'
              },
              {
                text: 'MateCon 2'
              }
            ]
          },
          {
            text: 'FastEnd 2',
            nodes: [
              {
                text: 'MateCon 1'
              },
              {
                text: 'MateCon 2'
              }
            ]
          },
          {
            text: 'FastEnd 3',
            nodes: [
              {
                text: 'MateCon 1'
              },
              {
                text: 'MateCon 2'
              }
            ]
          },
          {
            text: 'Revolute 1',
            nodes: [
              {
                text: 'MateCon 1'
              },
              {
                text: 'MateCon 2'
              }
            ]
          },
          {
            text: 'Silder1'
          },
          {
            text: 'Silder 2'
          }
        ];

        return (
            <div id="FamilyPanel" >    
                <Tab.Container id="familyTabContainer" defaultActiveKey="familyAssembly">                
                    <div id="familyTabs" >
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="familyAssembly">构件装配表</NavItem>
                            <NavItem eventKey="familyProperty">构件属性</NavItem>
                        </Nav>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="familyAssembly">
                                <div>
                                    <TreeView data={familyTree} />
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="familyProperty">
                                <div>
                                    <ButtonGroup>
                                        <p>软件类别</p>
                                        <div>
                                            <FormControl type="text" bsSize="small" />
                                            <Button type="submit">编辑</Button>
                                        </div> 
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <p>构件类型</p>
                                        <DropdownButton title="1500X2400nm 甲级" id="constructType">
                                          <MenuItem eventKey="1">1500X2400nm 甲级</MenuItem>
                                          <MenuItem eventKey="2">1200X2000nm 乙级</MenuItem>
                                          <MenuItem eventKey="3">1000X1600nm 丙级</MenuItem>
                                        </DropdownButton>
                                        <ButtonGroup>
                                            <Button bsSize="small">新建</Button>
                                            <Button bsSize="small">编辑</Button>
                                            <Button bsSize="small">删除</Button>
                                        </ButtonGroup>
                                    </ButtonGroup>
                                    {/*
                                    <div>
                                        <Grid>
                                            <Row className="show-grid">
                                              <Col sm={1} sm={1} ><code>构造</code></Col>
                                            </Row>
                                            <Row className="show-grid">
                                              <Col sm={1} sm={1} ><code>功能</code></Col>
                                              <Col sm={1} sm={1} ><code>内部</code></Col>
                                            </Row>
                                            <Row className="show-grid">
                                              <Col sm={1} sm={1} ><code>墙闭合</code></Col>
                                              <Col sm={1} sm={1} ><code>按主体</code></Col>
                                            </Row>
                                            <Row className="show-grid">
                                              <Col sm={1} sm={1} ><code>构造类型</code></Col>
                                              <Col sm={1} sm={1} ><code>双扇防火门</code></Col>
                                            </Row>
                                        </Grid>
                                    </div>
                                    */}
                                </div>
                            </Tab.Pane>  
                        </Tab.Content>
                    </div> 
                </Tab.Container>
            </div>
        );
    }
}

export default FamilyPanel;


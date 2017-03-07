import React from 'react';
import ReactDom from 'react-dom';
import ProjectPanel from './ProjectPanel.jsx';

import {Nav, Panel, ButtonToolbar, Button, Glyphicon, Tab, Tabs, NavItem, NavDropdown, DropdownButton, MenuItem } from "react-bootstrap"
    
class BottomPanel extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Panel id="BottomPanel" defaultExpanded bsStyle="primary">
                <Nav bsStyle="tabs">
                    <NavItem>Project01</NavItem>
                </Nav>
                <Nav bsStyle="tabs">
                    <NavDropdown dropup title="+" id="nav-dropdown">
                        <MenuItem >Family</MenuItem>
                        <MenuItem >Drawing</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav bsStyle="tabs">
                    <NavItem>Family01</NavItem>
                    <NavItem>Family02</NavItem>
                    <NavItem>Family03</NavItem>
                </Nav>
                <Nav bsStyle="tabs">
                    <NavItem>Draw01</NavItem>
                    <NavItem>Draw02</NavItem>
                    <NavItem>Draw03</NavItem>
                </Nav>
            </Panel>
        );
    }
}

export default BottomPanel;

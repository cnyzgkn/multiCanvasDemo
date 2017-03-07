import React from 'react';
import ReactDom from 'react-dom';

import {DropdownButton, MenuItem} from "react-bootstrap"
    
class ViewSelectGroup extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <DropdownButton id="viewSelectDraopDown" noCaret title="3D视图" className="ViewSelectDraopDown">
                <MenuItem>3D视图</MenuItem>
                <MenuItem>2D视图</MenuItem>
                <MenuItem>前视图</MenuItem>
                <MenuItem>后视图</MenuItem>
                <MenuItem>顶视图</MenuItem>
                <MenuItem>底视图</MenuItem>
                <MenuItem>平面视图</MenuItem>
            </DropdownButton>
        );
    }
}

export default ViewSelectGroup;

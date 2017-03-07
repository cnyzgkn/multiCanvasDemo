import React from 'react';
import ReactDom from 'react-dom';

import {Panel, Button} from "react-bootstrap"
    
class FamilyButton extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <Button id="FamilyInfo" onClick={this.props.showOrHideFamilyPanel}></Button>
        );
    }
}

export default FamilyButton;

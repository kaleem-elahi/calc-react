import React, { Component } from 'react';
// import Button from './Calc/button';

class Operation extends Component {

    render(){

        let isclass = this.props.class ? this.props.class : " btn-info ";

        return(
            <input type="button" className={"btn  " + isclass } disabled={this.props.disableAction}
             onClick={this.props.handleClick}
             value={this.props.type} />
        );
    }
}

export default Operation; 
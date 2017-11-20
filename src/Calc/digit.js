import React, { Component } from 'react';
// import Button from './Calc/button';

class Digit extends Component {

    render(){

 
        return(
            <input type="button" className="btn digit" onClick={this.props.handleClick} disable={this.props.disableAction}
             value={this.props.number} />         );
    }
}


export default Digit; 

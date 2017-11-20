import React, { Component } from 'react';
import Digit from './digit';
import Operation from './operation';

class Calc extends Component {


    constructor(props) {
        super(props);
        this.state = {
          result : "0",
          disable : true,
          data : ''
        };
        this.handleClick = this.handleClick.bind(this);
    }




  handleClick(event){
    const value = event.target.value; // button value

    console.log(value);

    const data = value;  // screen data
    let lastChar = data.slice(-1); // takes last character of data
    let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; // regex
    let ch = format.test(lastChar); // returns true or false

    switch (value) {

      case '=': {

	const result = eval(this.state.data);
	this.setState({ result,data : result });


        break;
      }
      case 'C': {
        this.setState({disable : false});
        this.setState({ data: '', result: '0' });
        break;
      }
      default: {

        if(ch == true){
            this.setState({disable : true});
        }else{
            this.setState({disable : false});
        }

        this.setState({ data: this.state.data += value})
        break;
      }
    }
}

    render(){

        return (
                <div className="container">

                                <br/>
                                                <br/>
                    <div className="Number-container">
                        <div className="keys">

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td colSpan="3">
                                            <div className="result" >
                                                            {!this.state.data ? this.state.result : this.state.data}
                                            </div>
                                        </td>
                                        <td><Operation type="C" class="btn-danger" handleClick={this.handleClick} /></td>
                                    </tr>

                                    <tr>
                                        <td><Digit number="9" handleClick={this.handleClick} /></td>
                                        <td><Digit number="8" handleClick={this.handleClick} /></td>
                                        <td><Digit number="7" handleClick={this.handleClick} /></td>
                                        <td><Operation disableAction={this.state.disable} type="+" handleClick={this.handleClick} /></td>
                                    </tr>
                                    <tr>
                                        <td><Digit number="6" handleClick={this.handleClick}  /></td>
                                        <td><Digit number="5" handleClick={this.handleClick}  /></td>
                                        <td><Digit number="4" handleClick={this.handleClick}  /></td>
                                        <td><Operation disableAction={this.state.disable} type="-" handleClick={this.handleClick} /></td>
                                    </tr>
                                    <tr>
                                        <td><Digit number="3" handleClick={this.handleClick}  /></td>
                                        <td><Digit number="2" handleClick={this.handleClick}  /></td>
                                        <td><Digit number="1" handleClick={this.handleClick}  /></td>
                                        <td><Operation disableAction={this.state.disable} type="/" handleClick={this.handleClick}  /></td>
                                    </tr>
                                    <tr>
                                        <td><Digit number="0" handleClick={this.handleClick}  /></td>
                                        <td><Digit number="." handleClick={this.handleClick}  /></td>
                                        <td> <Operation class="btn-success width-100"  type="=" disableAction={this.state.data? false : true} handleClick={this.handleClick}  /></td>

                                        <td><Operation disableAction={this.state.disable} type="*" handleClick={this.handleClick}  /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Calc;

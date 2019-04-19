import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';
import NumPad from './NumPad';
import OperationPad from './OperationPad';

class App extends Component {

  state = {input: "",numberbox: ""};
  constructor(props) {
    super(props);
    this.state = {input: "",numberbox: ""};

    this.handler = this.handler.bind(this)
    this.operationHandler = this.operationHandler.bind(this);
  }

  operationHandler(op) {
    console.log("Operation Clicked. " + op);
  }
  operationClicked() {
    
  }

  handler(num) {
    this.numberClicked(num);
  }
  numberClicked(num) {
    console.log(num + " clicked");
    if (num == "-"){
      var val = this.state.input;
      if (val.startsWith("-")){ val = val.replace("-", ""); }
      else { val = "-" + val; }
      this.setState({input: val})
    }
    else {
      var val = this.state.input + num;
      this.setState({input: val})
    }
  }
  render() {
    return (
      <div className="App">
        
        <input class="calcField" type="text" value={this.state.input}/>
        <NumPad handler= {this.handler} />
        <OperationPad handler = {this.operationHandler} />
      </div>
    );
  }
}

export default App;

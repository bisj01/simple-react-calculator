import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './App.css';

class NumPad extends Component {


  numberClicked() {
    var num = 1;
    console.log(num + " clicked");
    var val = this.state.input + num;
    this.setState({input: val})
  }
  render() {
    return (
        <div class="keypad">
            <Grid container spacing={4}>
                <Grid item xs={3}>
                <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(1);}}>+</button></Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(2);}}>-</button></Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(3);}}>*</button></Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(4);}}>/</button></Paper>
                </Grid>
            </Grid>
      </div>
    );
  }
}

export default NumPad;

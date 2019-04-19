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
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(1);}}>1</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(2);}}>2</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(3);}}>3</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(4);}}>4</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(5);}}>5</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(6);}}>6</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(7);}}>7</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(8);}}>8</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(9);}}>9</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler("-");}}>+/-</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(0);}}>0</button></Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper className={Paper}><button class="button" onClick={() => {this.props.handler(".");}}>.</button></Paper>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default NumPad;

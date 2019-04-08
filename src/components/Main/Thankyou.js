import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Main.css';

class Thankyou extends Component {
  render() {

    return (
      <div>
          <center><h4 className="textAlign" >{this.props.optionDetails} Thank you for attending test</h4></center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, questionDetails, optionDetails } = state.QuestionReducers;
  return { error, questionDetails, optionDetails };
};

export default withRouter(connect(mapStateToProps)(Thankyou));

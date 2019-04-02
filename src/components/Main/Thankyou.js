import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import { Question, AddOptionsDetails } from '../../Actions/QuestionAction';
import './Main.css';

class Thankyou extends Component {
  render() {
  console.log(this.props);

    return (
      <div>
       {/* <center> <h6 >msg:{this.props.optionDetails}</h6></center> */}
          <center><h4 className="textAlign" >{this.props.optionDetails} Thank you for attending test</h4></center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  debugger;
  const { error, questionDetails, optionDetails } = state.QuestionReducers;
  return { error, questionDetails, optionDetails };
};

export default withRouter(connect(mapStateToProps)(Thankyou));
// export default Thankyou;

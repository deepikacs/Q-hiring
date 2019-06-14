import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from "react-dropdown-select";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './Main.css';

class Thankyou extends Component {
  constructor(){
    super();
    this.state={
      options :[
        { label: 'red', value: 1},
        { label: 'green', value: 2},
        { label: 'blue', value: 3},
      ]
    };

  }
  
  render() {
    // const options = [
    //   { label: 'red', value: 1},
    //   { label: 'green', value: 2},
    //   { label: 'blue', value: 3},
    // ];

    
    return (
      <div>
  
<ReactMultiSelectCheckboxes options={ this.state.options}  onClose isMulti={true} dropdownButton groupHeading/>

          {/* <center><h4 className="textAlign" >{this.props.optionDetails} Thank you for attending test</h4></center> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, questionDetails, optionDetails } = state.QuestionReducers;
  return { error, questionDetails, optionDetails };
};

export default withRouter(connect(mapStateToProps)(Thankyou));

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { onAgeUp,onAgDown } from '../../Actions/AgeupdownAction';
import {submitForm} from '../../Actions/FormReduxAction';
class Ageupdown extends Component {
    // constructor(props){
    //     super(props);
        
    // }
    componentDidMount =()=>{
        this.props.submitForm();
    }
    
    render() {
        return (
            <div>
                your age: <span>{this.props.age}</span>
              <button onClick={this.props.onAgeUp} >ageup</button>
              <button onClick={this.props.onAgDown}>agedown</button>
            <h1>formRedux:{this.props.message1}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { age, } = state.AgeupdownReducers;
    const {message1} = state.FormReduxReducers;
    return { age,message1 };
  };
  
  export default connect(mapStateToProps, { onAgeUp,onAgDown,submitForm})(Ageupdown);
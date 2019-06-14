import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onAgeUp,onAgDown } from '../../Actions/AgeupdownAction';

class Ageupdown extends Component {
    // constructor(props){
    //     super(props);
        
    // }
    
    render() {
        return (
            <div>
                your age: <span>{this.props.age}</span>
              <button onClick={this.props.onAgeUp} >ageup</button>
              <button onClick={this.props.onAgDown}>agedown</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { age } = state.AgeupdownReducers;
    return { age };
  };
  
  export default withRouter(connect(mapStateToProps, { onAgeUp,onAgDown})(Ageupdown));
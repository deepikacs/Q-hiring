import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { btnA,btnB } from '../../Actions/UpdateBtnAction';

class UpdateBtn extends Component {
    // constructor(props){
    //     super(props);
        
    // }
    
    render() {
        return (
            <div>
                A: <span>{this.props.A}</span>
              <button onClick={()=>this.props.btnA(this.props.B)} >A</button>
              B: <span>{this.props.B}</span>
              <button onClick={()=>this.props.btnB(this.props.A)}>B</button>
              {/* <button onClick={this.props.btnC} >C</button>
              <button onClick={this.props.btnD}>D</button> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { A } = state.UpdateBtnReducers;
    const { B} = state.UpdateBtnReducers1;
    return { A,B };
  };
  
  export default connect(mapStateToProps, { btnA,btnB})(UpdateBtn);
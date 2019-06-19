import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {submitForm} from '../../Actions/ReduxExampleAction';

class ReduxExample extends Component {
    constructor(props){
        super(props);
    this.state={
        name:'',
        city:''
    }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=()=>{
        this.props.submitForm();
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <label>City</label>
                    <input type="text" name="city" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>submit</button>
                    {this.props.message}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
  const { message }=state.ReduxExampleReducers;
  return {message}
}

export default connect(mapStateToProps, { submitForm })(ReduxExample);
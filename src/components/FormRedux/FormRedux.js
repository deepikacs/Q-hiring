import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {submitForm} from '../../Actions/FormReduxAction';

class FormRedux extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            // option:[]
        }

    }
    handleChange =(e)=>{
        // debugger;
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // debugger;
        let reqobj={
            name1:this.state.name,
            age1:this.state.age
        } 
  
        this.props.submitForm(reqobj);
        this.setState({name:'',age:''});
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                    <label>Age</label>
                    <input type="text" name="age" onChange={this.handleChange}  value={this.state.age}/>
                    <button onClick={this.handleSubmit}>SUbmit</button>
                </form>
                <h1>{this.props.message}</h1>
                {/* <h1>{this.props.array}</h1> */}
      
       <div>{this.props.array.map((item,index)=>
        (
          <div  key={index}>name:{item.name1}<br/>
          age:{item.age1}
          </div>  
            ))}
            </div> 

     

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // debugger;
    const { message,array } = state.FormReduxReducers;
    return {message,array };
  };
  
  export default connect(mapStateToProps, { submitForm })(FormRedux);

// export default FormRedux;
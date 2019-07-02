import React, { Component } from 'react';
import {Form,Label,Input} from 'reactstrap';
import { connect } from 'react-redux';
import { submitData } from '../../Actions/Signup1Action'; 

class Login1 extends Component {
    componentDidMount=()=>{
        this.props.submitData();
    }
    render() {
        return (
            <div>
                {this.props.msg}
              <Form className="div-align">
        <Label>Username</Label>
         <Input type="text"  /><br/>
         <Label>Password</Label>
        <Input type="text" /><br/>
        
        <button type="button" onClick={this.handleSubmit}>submit</button>
    </Form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    const { msg,array } = state.Signup1Reducers;
    return {msg,array};
  };
  
  export default connect(mapStateToProps, { submitData })(Login1);
// export default Login1;
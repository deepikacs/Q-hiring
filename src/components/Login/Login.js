import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Login.css';
import { submitLogin } from '../../Actions/LoginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fields: {},
        errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm= this.submituserLoginForm.bind(this);
  }
  handleChange(e) {
    // this.setState({ [e.target.name]: e.target.value });
    let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
  }


  submituserLoginForm(e) {
    e.preventDefault();
    debugger;
    
    if (this.validateForm()) {
        let fields = this.state.fields;

        const loginDetails={mobileno: fields["mobileno"],password:fields["password"]};
        this.props.submitLogin(loginDetails);
    }

    

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    // if (typeof fields["mobileno"] !== "undefined") {
    //   if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //     formIsValid = false;
    //     errors["mobileno"] = "*Please enter valid mobile no.";
    //   }
    // }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    // if (typeof fields["password"] !== "undefined") {
    //     debugger;
    //   if (!fields["password"].match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  render() {
    return (
      <React.Fragment>
        


        {/* login */}
        <div className="div-align">
        <center><h3>Login page</h3></center>
        <form method=""  name=""  onSubmit= {this.submituserLoginForm} >
        
        <label>Mobile Number:</label>
        <input type="number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
        </div>


       
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
    debugger;
    const {  error } = state.LoginReducers;
    return { error };
  };

export default withRouter(connect(mapStateToProps, { submitLogin })(Login));
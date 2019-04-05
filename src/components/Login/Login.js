import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Login.css';
import { submitLogin } from '../../Actions/LoginAction';
import logo from '../../Images/logo.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileno: '',
      password: '',
      formErrors: { mobileno: '', password: '' },
      formValid: false,
      mobilenoValid: false,
      passwordValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm = this.submituserLoginForm.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.ValidateField(name, value) });
  }

  ValidateField(fieldname, value) {
    let fieldValidationError = this.state.formErrors;
    let mobilenoValid = this.state.mobilenoValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldname) {
      case 'mobileno':
        mobilenoValid = value.match(/^[0-9]{10}$/);
        fieldValidationError.mobileno = mobilenoValid ? '' : 'Invalid Mobile number ';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationError,
      mobilenoValid: mobilenoValid,
      passwordValid: passwordValid
    }, this.validateForm);

  }

  validateForm() {
    this.setState({ formValid: this.state.mobilenoValid });
  }

  errorClass(error) {
    if (error) {
      return (error.length === 0 ? '' : 'brder-red');
    }
    else {
      return ('');
    }
  }

  submituserLoginForm(e) {
    e.preventDefault();
    const loginDetails = { mobileno: this.state.mobileno, password: this.state.password };
    this.props.submitLogin(loginDetails);
  }

  render() {
    return (
      <React.Fragment>
        <center><img src={logo} className="padding-top" alt="logo"/></center>
        <div className="align">
          <center><h3>Login page</h3></center>
          <form method="" name="" onSubmit={this.submituserLoginForm} >
            <label>Mobile Number:</label>
            <input type="number" required className={` ${this.errorClass(this.state.formErrors.mobileno)}`} name="mobileno" value={this.state.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.mobileno}</div>
            <label>Password</label>
            <input type="password" required className={`${this.errorClass(this.state.formErrors.password)}`} name="password" value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.passwordValid}</div>
            <input type="submit" className="button" value="Register" disabled={!this.state.formValid} />
          </form>
          <center><div className="errorMsg">{this.props.message}</div></center>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { error, message } = state.LoginReducers;
  return { error, message };
};


export default withRouter(connect(mapStateToProps, { submitLogin })(Login));
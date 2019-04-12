import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Signup.css';
import logo from '../../Images/logo.png';
import { submitSignup } from '../../Actions/SignupAction'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      college:'',
      branch:'',
      year:'',
      mobileno:'',
      batch:'',
      city:'',
      password:'',
      cnfpassword:'',

      formErrors: { firstname: '', lastname: '', email:'',college:'',branch:'',year:'',mobileno:'',batch:'',city:'',password:'',cnfpassword:'', },
      firstnameValid: false,
      lastnameValid: false,
      emailValid: false,
      collegeValid:false,
      branchValid:false,
      yearValid:false,
      mobilenoValid:false,
      batchValid:false,
      cityValid:false,
      passwordValid:false,
      cnfpasswordValid:false,

      formValid: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };


  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let collegeValid = this.state.collegeValid;
    let branchValid = this.state.branchValid;
    let yearValid = this.state.yearValid;
    let mobilenoValid = this.state.mobilenoValid;
    let batchValid = this.state.batchValid;
    let cityValid = this.state.cityValid;
    let passwordValid = this.state.passwordValid;
    let cnfpasswordValid = this.state.cnfpasswordValid;


    switch (fieldName) {
      case 'firstname':
        firstnameValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.firstname = firstnameValid ? '' : ' * Invalid Name :First Name contain characters only.';
        break;
      case 'lastname':
        lastnameValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.lastname = lastnameValid ? '' : '* Invalid Name :Last Name contain characters only.';
        break;

        case 'email':
        emailValid = value.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        fieldValidationErrors.email = emailValid ? '' : '* Invalid email : Please enter valid email-ID.'
        break;

        case 'college':
        collegeValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.college = collegeValid ? '' : ' *Please enter your college';
        break;

        case 'branch':
        branchValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.branch = branchValid ? '' : ' *Please enter your branch';
        break;

        case 'year':
        yearValid = value.match(/^\d{4}$/);
        fieldValidationErrors.year = yearValid ? '' : ' *Please enter your year of passing';
        break;

        case 'mobileno':
        mobilenoValid = value.match(/^[0-9]{10}$/);
        fieldValidationErrors.mobileno = mobilenoValid ? '' : 'Invalid Mobile number ';
        break;

        case 'batch':
        batchValid = value.match(/^\d{4}$/);
        fieldValidationErrors.batch = batchValid ? '' : ' *Please enter your batch';
        break; 
        
        case 'city':
        cityValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationErrors.city = cityValid ? '' : ' *Please enter your branch';
        break;

        case 'password':
          passwordValid = value.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
          fieldValidationErrors.password = passwordValid ? '' : "*Please enter secure and strong password."
          break;   
          
          case 'cnfpassword':
          
          if(this.state.cnfpassword != this.state.password){
            fieldValidationErrors.cnfpassword ="* password do not match.";
            cnfpasswordValid=false;
          }
          else{
            fieldValidationErrors.cnfpassword='';
            cnfpasswordValid=true;
          }
          break;

        default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstnameValid: firstnameValid,
      lastnameValid: lastnameValid,
      emailValid: emailValid,
      collegeValid:collegeValid,
      branchValid:branchValid,
      yearValid:yearValid,
      mobilenoValid:mobilenoValid,
      batchValid:batchValid,
      cityValid:cityValid,
      passwordValid:passwordValid,
      cnfpasswordValid:cnfpasswordValid

    }, this.validateForm);
  }
  validateForm() {
    this.setState({ formValid: this.state.firstnameValid && this.state.lastnameValid && this.state. emailValid && this.state.collegeValid && this.state.branchValid && this.state.yearValid && this.state.mobilenoValid && this.state.batchValid && this.state.cityValid && this.state.passwordValid && this.state.cnfpasswordValid});
  }
  errorClass(error) {
    if (error) {
      return (error.length === 0 ? '' : 'brder-red');
    }
    else {
      return ('');
    }

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    const SignupDetails ={
      firstname:this.state.firstname,
      lastname :this.state.lastname,
      email : this.state.email,
      college :this.state.college,
      branch :this.state.branch,
      year:this.state.year,
      mobileno:this.state.mobileno,
      batch : this.state.batch,
      city :this.state.city,
      password :this.state.password,
      cnfpassword :this.state.cnfpassword

    }
    this.props.submitSignup(SignupDetails);
  }



  render() {
    return (
      <div>
      <center><img src={logo} alt="logo" className="signup-img" /></center>
      <div className="div-align">
       
        <h3>Registration page</h3>
        <form method="" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
          <label><span className="errorMsg">*</span> First Name</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.firstname)}`}
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.firstname}</div>

          <label><span className="errorMsg">*</span> Last Name</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.lastname)}`} name="lastname" value={this.state.lastname} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.lastname}</div>

          <label><span className="errorMsg">*</span> Email</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.email)}`} name="email" value={this.state.email} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.email}</div>

          <label><span className="errorMsg">*</span> college</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.college)}`} name="college" value={this.state.college} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.college}</div>

          <label><span className="errorMsg">*</span> Branch</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.branch)}`} name="branch" value={this.state.branch} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.branch}</div>

          <label><span className="errorMsg">*</span> Year Of Passing</label>
          <input type="number" required className={` ${this.errorClass(this.state.formErrors.year)}`} name="year" value={this.state.year} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.year}</div>

          <label>Mobile Number:</label>
            <input type="number" required className={` ${this.errorClass(this.state.formErrors.mobileno)}`} name="mobileno" value={this.state.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.mobileno}</div>

            <label><span className="errorMsg">*</span> Batch</label>
          <input type="number" required className={` ${this.errorClass(this.state.formErrors.batch)}`} name="batch" value={this.state.batch} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.batch}</div>

          <label><span className="errorMsg">*</span> City</label>
          <input type="text" required className={` ${this.errorClass(this.state.formErrors.city)}`} name="city" value={this.state.city} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.city}</div>

            <label><span className="errorMsg">*</span>Password</label>
            <input type="password" required className={`${this.errorClass(this.state.formErrors.password)}`} name="password" value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.passwordValid}</div>

            <label><span className="errorMsg">*</span> Confirm Password</label>
          <input type="password" required className={` ${this.errorClass(this.state.formErrors.cnfpassword)}`} name="cnfpassword" value={this.state.cnfpassword} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.formErrors.cnfpassword}</div>

          <button type="submit" className="button" value="Register" disabled={!this.state.formValid}>Signup</button>
        </form>
      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { error } = state.SignupReducers;
  return { error };
};

export default withRouter(connect(mapStateToProps, { submitSignup })(Signup));


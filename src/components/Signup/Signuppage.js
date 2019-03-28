import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Signup.css';

import { submitSignup } from '../../Actions/SignupAction'

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            fields: {
                firstname: '',
                lastname:'',
                email:''
            },
            errors: {
                firstname: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    // checkText = (e) => {
    //     // const { charCode } = e;
    //     // console.log('charcode=', charCode, 'validaton=', (charCode > 65 && charCode < 91) || (charCode > 96 && charCode < 123));
    //     // if ((charCode >= 65 && charCode < 91) || (charCode > 96 && charCode < 123)) {
    //     //     return true;
    //     // }
    //     // return e.preventDefault();
    // }

    handleChange(e) {
        e.preventDefault();
        // const { value, name } = e.target;
        const re = /^[a-zA-Z ]*$/;
        // console.log('name=', name, 'val=', value, 'test=', re.test(value));
        if (re.test(e.target.value)) {
            debugger;
            console.log('in if');
            let fields = this.state.fields;

            fields[e.target.name] = e.target.value;
            this.setState({
                fields
            });
        }
        if((e.target.value)== undefined) {
            debugger;
            let errors = this.state.errors;
            errors["firstname"] = "*Please enter alphabet characters only.";
        }
        // return re.test(value);
        
        //this.validateForm(e.target.name);
    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            // let fields = this.state.fields;
            // const SignupDetails = {
            //     firstname: fields["firstname"],
            //     lastname: fields["lastname"],
            //     email: fields["emailid"],
            //     college: fields["college"],
            //     branch: fields["branch"],
            //     year: fields["yearofpassing"],
            //     mobileno: fields["mobileno"],
            //     batch: fields["batch"],
            //     city: fields["city"],
            //     password: fields["password"]
            // }
            // this.props.submitSignup(SignupDetails);

        }

    }

    validateForm(fieldname) {
      debugger;

        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;

        debugger;
        if ((fields[fieldname]== "firstname") &&(!fields[fieldname])) {
            debugger;
            formIsValid = false;
            errors[fieldname] = "*Please enter your firstname.";
        }

        if ((typeof fields[fieldname] !== "undefined")&&(fields[fieldname]== "firstname")) {
            if (!fields[fieldname].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors[fieldname] = "*Please enter alphabet characters only.";
            }
        }

        if ((!fields[fieldname]) &&(fields[fieldname]== "lastname")) {
            formIsValid = false;
            errors[fieldname] = "*Please enter your lastname.";
        }

        if ((typeof fields[fieldname] !== "undefined") && (fields[fieldname]== "lastname")) {
            if (!fields[fieldname].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors[fieldname] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields[fieldname]) {
            formIsValid = false;
            errors[fieldname] = "*Please enter your email-ID.";
        }

        if (typeof fields[fieldname] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields[fieldname])) {
                formIsValid = false;
                errors[fieldname] = "*Please enter valid email-ID.";
            }
        }

    //     else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your college";
    //     }

    //    else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields[fieldname].match(/^[a-zA-Z ]*$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter alphabet characters only.";
    //         }
    //     }

    //     else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your branch.";
    //     }

    //     else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields[fieldname].match(/^[a-zA-Z ]*$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter alphabet characters only.";
    //         }
    //     }

    //     else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your year of passing.";
    //     }

    //    else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields[fieldname].match(/^\d{4}$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter year correctly.";
    //         }
    //     }


    //    else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your mobile no.";
    //     }

    //     else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter valid mobile no.";
    //         }
    //     }

    //     else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your batch.";
    //     }

    //     else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields[fieldname].match(/^\d{4}$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter alphabet characters only.";
    //         }
    //     }


    //    else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your city.";
    //     }

    //     else if (typeof fields[fieldname] !== "undefined") {
    //         if (!fields[fieldname].match(/^[a-zA-Z ]*$/)) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter city.";
    //         }
    //     }

    //     else if (!fields[fieldname]) {
    //         formIsValid = false;
    //         errors[fieldname] = "*Please enter your password.";
    //     }

    //    else if (typeof fields[fieldname] !== "undefined") {
    //         debugger;
    //         if (!fields[fieldname].match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")) {
    //             formIsValid = false;
    //             errors[fieldname] = "*Please enter secure and strong password.";
    //         }
    //     }

      //  else if (!fields[fieldname]) {
      //       // formIsValid = false;
      //       errors[fieldname] = "*Please enter your Confirm password.";
      //   }

      //   // else if (typeof fields[fieldname] !== "undefined") {
      //   //     debugger;
      //   //         errors[fieldname] = "*Passwords do not match.";
      //   //     }
      //   // }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {
        console.log('render=', this.state.fields);
        return (

            <div className="div-align">
                <h3>Registration page</h3>
                <form method="" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                    <label>First Name</label>
                    <input type="text" 
                    // onKeyPress={this.checkText} 
                    name="firstname" 
                    value={this.state.fields.firstname}
                    onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.firstname}</div>

                    <label>Last Name</label>
                    <input type="text" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.lastname}</div>

                    <label>Email ID:</label>
                    <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.emailid}</div>

                    <label>College</label>
                    <input type="text" name="college" value={this.state.fields.college} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.college}</div>

                    <label>Branch</label>
                    <input type="text" name="branch" value={this.state.fields.branch} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.branch}</div>

                    <label>Year of Passing</label>
                    <input type="number" name="yearofpassing" value={this.state.fields.yearofpassing} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.yearofpassing}</div>

                    <label>Mobile No:</label>
                    <input type="number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.mobileno}</div>

                    <label>Batch</label>
                    <input type="number" name="batch" value={this.state.fields.batch} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.batch}</div>

                    <label>City</label>
                    <input type="text" name="city" value={this.state.fields.city} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.city}</div>

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>

                    <label>Confirm Password</label>
                    <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.confirmpassword}</div>

                    <input type="submit" className="button" value="Register" />
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const { error } = state.SignupReducers;
    return { error };
};

export default withRouter(connect(mapStateToProps, { submitSignup })(Signup));
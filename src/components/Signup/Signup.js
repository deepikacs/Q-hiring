import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './Signup.css';

import { submitSignup } from '../../Actions/SignupAction'

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        debugger;
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            debugger;
            const fields = this.state.fields;
            let SignupDetails = {
                firstname: fields["firstname"],
                lastname: fields["lastname"],
                email: fields["emailid"],
                college: fields["college"],
                branch: fields["branch"],
                year_of_passing: fields["yearofpassing"],
                phonenumber: fields["mobileno"],
                batch: fields["batch"],
                city: fields["city"],
                password: fields["password"]
            }
            this.props.submitSignup(SignupDetails);

        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your firstname.";
        }

        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your lastname.";
        }

        if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["college"]) {
            formIsValid = false;
            errors["college"] = "*Please enter your college";
        }

        if (typeof fields["college"] !== "undefined") {
            if (!fields["college"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["college"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["branch"]) {
            formIsValid = false;
            errors["branch"] = "*Please enter your branch.";
        }

        if (typeof fields["branch"] !== "undefined") {
            if (!fields["branch"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["branch"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["yearofpassing"]) {
            formIsValid = false;
            errors["yearofpassing"] = "*Please enter your year of passing.";
        }

        if (typeof fields["yearofpassing"] !== "undefined") {
            if (!fields["yearofpassing"].match(/^\d{4}$/)) {
                formIsValid = false;
                errors["yearofpassing"] = "*Please enter year correctly.";
            }
        }


        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["batch"]) {
            formIsValid = false;
            errors["batch"] = "*Please enter your batch.";
        }

        if (typeof fields["batch"] !== "undefined") {
            if (!fields["batch"].match(/^\d{4}$/)) {
                formIsValid = false;
                errors["batch"] = "*Please enter alphabet characters only.";
            }
        }


        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "*Please enter your city.";
        }

        if (typeof fields["city"] !== "undefined") {
            if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["city"] = "*Please enter city.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            debugger;
            if (!fields["password"].match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["confirmpassword"]) {
            formIsValid = false;
            errors["confirmpassword"] = "*Please enter your Confirm password.";
        }

        if (typeof fields["confirmpassword"] !== "undefined") {
            debugger;
            if (fields["confirmpassword"] != fields["password"]) {
                formIsValid = false;
                errors["password"] = "*Passwords do not match.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {
        return (

            <div className="div-align">
                <h3>Registration page</h3>
                <form method="" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
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
    debugger;
    const { error } = state.SignupReducers;
    return { error };
};

export default withRouter(connect(mapStateToProps, { submitSignup })(Signup));
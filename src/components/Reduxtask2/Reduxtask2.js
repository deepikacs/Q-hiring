import React, { Component } from 'react';
import {Form,Label,Input} from 'reactstrap';
import TableComponent from './TableComponent';

class Reduxtask2 extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            secondName:'',
            age:'',
            city:'',
            option:[]

        }
       this.handleChange=this.handleChange.bind(this); 
       this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        
        this.setState({[e.target.name]: e.target.value });
     }
     handleSubmit(e){
        e.preventDefault();
        let reqobj={
            fnmae:this.state.firstName,
            lname:this.state.secondName,
            age:this.state.age,
            city:this.state.city
        }
        let x=this.state.option.push(reqobj);
        this.setState({x});

        console.log(this.state.option);
     }
    render() {
        return (
            <div>
                 <Form className="div-align">
        <Label>firstName</Label>
         <Input type="text" name="firstName"  onChange={this.handleChange}/><br/>
         <Label>SecondName</Label>
        <Input type="text" name="secondName" onChange={this.handleChange}/><br/>
        <Label>Age</Label>
        <Input type="text" name="age" onChange={this.handleChange}/><br/>
        <Label>City</Label>
        <Input type="text" name="city" onChange={this.handleChange}/><br/>
        <button type="button" onClick={this.handleSubmit}>submit</button>
    </Form>

        <TableComponent option={this.state.option}/>
                
            </div>
        );
    }
}

export default Reduxtask2;
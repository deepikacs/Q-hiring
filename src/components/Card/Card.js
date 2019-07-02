import React, { Component } from 'react';
import logo from './visa.png'

class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            cardtype:'',
            Img:[]
        }
    }
    handleChange=(e)=>{
        
        const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
       
        () => { this.submit(name, value) });
        // ()=>{this.displaycard()});
       
    }
    submit=(name,value)=>{
        
        // console.log(value);
        // visa
    var re = new RegExp("^4");
    if (value.match(re) != null){
        return this.state.Img= `{https://www.google.com/search?q=visa+icon+url&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiq1YqyrYTjAhVVcCsKHV-jAD0Q_AUIECgB&biw=1301&bih=672#imgrc=SfUvRzdwG0lLiM}`;
        // return this.state.cardtype="visa";
    }
    



     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(value)) 
        return "Mastercard";
    re = new RegExp("^3[47]");
    if (value.match(re) != null)
    return this.state.cardtype= "AMEX";

   
    // switch(this.state.cardtype){
        
    //     case'visa':
    //     console.log(this.state.cardtype)
    //     return this.state.Img= "https://www.google.com/search?q=visa+icon+url&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiq1YqyrYTjAhVVcCsKHV-jAD0Q_AUIECgB&biw=1301&bih=672#imgrc=SfUvRzdwG0lLiM:"
    //     // var x=<img src={logo} alt="logo" />
        
    //     // break;
    // }
    return "";
    }
    render() {
        return (
            <div>
                Card:
                <input type="text" onChange={this.handleChange} name='name'/>
            {/* <button onClick={this.submit}>submit</button> */}
            {this.state.cardtype}
            {this.state.Img}
            <img src={this.state.Img} alt="logo"/>
            </div>
        );
    }
}

export default Card;
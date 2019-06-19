import React, { Component } from 'react';
import './Payment.css';
import $ from 'jquery';
import { connect } from "react-redux";
import { displayToken} from '../../Actions/PaymentAction';
import { withRouter } from 'react-router-dom'

class Payment extends Component {
  constructor(props){
    super(props);
    // this.state={

    // }
  }
  
  componentDidMount() {
    $(() => {
      window.recurly.configure({
        publicKey: "ewr1-W2ohHBwEIPG5psn74NKJEe",
        fields: {
          // affects all fields
          all: {
            style: {
              fontFamily: 'Helvetica, sans-serif'
            }
          },
         
          // affects the combined card field
          card: {
            displayIcon: true,
            style: {
              fontSize: '1em',
              placeholder: {
                color: 'gray !important',
                fontWeight: 'bold',
                content: {
                  number: 'Card number',
                  cvv: 'CVC'
                }
              },
              invalid: {
                fontColor: 'red'
              }
            }
          }
        }
      });
    });

  }
  

  handleFormSubmit(e) {
    // e.preventDefault();

    // window.recurly.token(document.querySelector("#recurly_form"), (err, token) => {
      let name="aaaa";
      this.props.displayToken(name);
      // if (err) {
      //   console.error(err);
      // } else {
      //   debugger;
      //   console.info(token);
      //   // const token =token;
      //   console.log(token);
      //   this.props.displayToken(token);
      // // storePaymentToken(token);
      // }
    // });

  }

  render() {
    return (
      <div className="div-align">
      <center><h3>Payment</h3></center>
      <p className="title-align">Enter your payment information below to finish setting up your device.</p>
        <form id="recurly_form">
        <label className="lable-align">FirstName</label>
        <input type="text" data-recurly="first_name" placeholder="First Name" className="input-align"/><br/>
        
        <label className="lable-align">LastName</label>
        <input type="text" data-recurly="last_name" placeholder="Last Name" className="input-align"/><br/>
        
        <label className="lable-align ">Address</label>
        <input type="text" data-recurly="address1" placeholder="Address" className="input-align add-align"></input><br/>
        
        <label className="lable-align city-align">City</label>
        <input type="text" data-recurly="city" placeholder="City" className="input-align"></input><br/>
        
        <label className="lable-align">State</label>
        <input type="text" data-recurly="state" placeholder="State" className="input-align"></input><br/>
        
        <label className="lable-align">Country</label>
        <input type="text" data-recurly="country" placeholder="Country" className="input-align"></input><br/>
        
        <label className="lable-align">Postal Code</label>
        <input type="text" data-recurly="postal_code" placeholder="Postal Code" className="input-align"></input><br/>
        
        {/* <label className="lable-align">token</label> */}
        <input type="hidden" name="recurly-token" data-recurly="token" className="input-align"></input><br/>
        
        <label className="lable-align">CardDetails</label>
        <div data-recurly="card"></div><br/>
        {/* <h1 onClick={this.props.tokenDisplay}>btn</h1>
          <h1>{this.props.token1}</h1> */}
         <center><button type="button" className="btn-color" onClick={this.handleFormSubmit} >
            Continue
          </button></center> 
          
        </form>
        
        <h1>{this.props.name}</h1> 

      </div>

 
    );
  }
}
const mapStateToProps = (state) => {
  // const { name } = state.PaymentReducer;
  // return { name };
};

export default withRouter(connect(mapStateToProps, {displayToken })(Payment));

// const mapStateToProps = state => {
//   debugger;
//   // return {
//   //   token1: state.token1
    
//   // };
//   // console.log(this.state.token1)

//   const { token1 } = state.PaymentReducer;
//   return { token1 };
// };

// const mapDispachToProps = dispatch => {
//   debugger;
//   return {
//     tokenDisplay: () => dispatch({ type: "FETCH_PAYMENTDETAILS_SUCCESS",value:100}),
//     // onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
//     // storePaymentToken: (paymentToken) => dispatch({type: "FETCH_PAYMENTDETAILS_SUCCESS", storePaymentToken(paymentToken)})

//   //   storePaymentToken(paymentToken){
//   //     dispatch(storePaymentToken(paymentToken))
//   // }
    
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(Payment);

// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(Payment);
// export default App;

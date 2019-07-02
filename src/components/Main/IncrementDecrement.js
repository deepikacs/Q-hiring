import React,{Component} from 'react';

const NewApp = () => (
  <div>
    <h1>US Dollar to Euro:</h1>
    <Amount render={amount => <Euro amount={amount} />} />

    <h1>US Dollar to Pound:</h1>
    <Amount render={amount => <Pound amount={amount} />} />
  </div>
);
export default NewApp;

class Amount extends Component{
    constructor(props) {
        super();
    
        this.state = {
          amount: 0,
        };
      }
    
      onIncrement = () => {
        this.setState(state => ({ amount: state.amount + 1 }));
      };
    
      onDecrement = () => {
        this.setState(state => ({ amount: state.amount - 1 }));
      };

    render(){
        return(
            <div>
            <button type="button" onClick={this.onIncrement}>
              +
            </button>
            <button type="button" onClick={this.onDecrement}>
              -
            </button>
    
            <p>US Dollar: {this.state.amount}</p>
            {/* <Euro euroAmount={this.state.amount}/> */}
            {/* <Pound poundAmount={this.state.amount}/> */}
    
            {this.props.render(this.state.amount)}
          </div>

        )
    }
}
// export default Amount;

  
const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

// const Euro =({amount}) =>{
//  return <p>Euro: {this.props.amount * 0.86}</p>

// };

// const  Pound =({amount}) =>{
//  return  <p> Pound: {this.props.amount * 0.76}</p>

// };

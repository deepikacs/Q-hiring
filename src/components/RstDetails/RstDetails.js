import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {LocationDetails,RestDetails} from '../../Actions/LocationAction';
import browserHistory from '../../utils/browserHistory';

class RstDetails extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
componentDidMount(){
    debugger;
//    let select1 = JSON.parse(localStorage.getItem('select'));
//    console.log(select1)
//    this.setState({select: select1})
   this.props.LocationDetails(this.props.location.state.place);
}
handleClick=(e, Rid)=>{
    e.preventDefault();
    console.log(e.target.entry, Rid); 
    browserHistory.push({
        pathname: "/menulist",
        state: {Rid:Rid }  
    })
    
}
// createList = (loc)=>{
//     this.props.LocationDetails(loc);
// }
    render() {
        return (
            <div>
                deepika
                {/* {this.createList(this.props.location.state.place)} */}
               {/* <h1> place={this.props.location.state.place}</h1> */}
               {this.props.Rstarray.map((item,index)=>(
                   <div key={item.index} onClick={(e)=>this.handleClick(e,item._id)} variant={"button-data-card-div"} 
                   entry={index} 
                   content={"More"}>
                   <p>{item.DeliveryCharge}</p>
                  <p>{item.RName}</p> 
                   <p>{item.RImg}</p>
                </div>
               ))} 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { error, message ,Rstarray} = state.LocationReducers;
    return { error, message,Rstarray };
  };

// export default RstDetails;
export default withRouter(connect(mapStateToProps,{LocationDetails})(RstDetails));
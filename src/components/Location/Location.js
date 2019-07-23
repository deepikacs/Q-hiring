import React, { Component } from 'react';
import {LocationDetails} from '../../Actions/LocationAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
// import RstDetails from '../RstDetails';

class Location extends Component {
   
    constructor(props){
        super(props);
        this.state={
            place:""
            // loc=[mysore,banglore]
        };
       

    }
    handleChange =(e)=>{
        debugger;
        this.setState({ place:e.target.value});
        console.log(e.target.value);
        let place1=e.target.value;
        // localStorage.setItem('select',
        // JSON.stringify(place1))


        browserHistory.push({
            pathname: "/rst",
            state: {place:place1 }  
        })
        
        // this.props.LocationDetails(e.target.value);
        // console.log(this.state.select);
    }
    // handleSubmit=(e)=>{
    //     debugger;
    //     e.preventDefault();
       
    //     const Location={place:this.state.place};
    //     console.log(Location);
    //     // browserHistory.push({ pathname:'/rst',state:{locationId:Location}});
    //     this.props.LocationDetails(Location);
    // }
   
    render() {
        return (
            <div>
                <form>
               <select type="text"  onChange={this.handleChange} value={this.state.place}>
               <option value="5d2f07a00332815d23e10ade">banglore</option>
               <option value="5d2f077f0332815d23e10add" >mysore</option>
              
               </select>

               {/* <button type="text" onClick={this.handleSubmit}>Submit</button> */}
               </form>
                {/* <RstDetails place={this.state.place}/> */}
               {/* <h1>{this.state.place}</h1> */}
               {/* {this.props.Rstarray.map((item,index)=>(
                   <div key={item.index}>
                   <p>{item.DeliveryCharge}</p>
                  <p>{item.RName}</p> 
                   <p>{item.RImg}</p>
                </div>
               ))} */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { error, message ,Rstarray} = state.LocationReducers;
    return { error, message,Rstarray };
  };

// export default Location;
export default withRouter(connect(mapStateToProps, { LocationDetails })(Location));
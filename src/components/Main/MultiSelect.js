import React, { Component } from 'react';
import Select from 'react-select';
// import ImageSelect from 'react-image-select';
import apple from '../../Images/apple.jpeg';

class MultiSelect extends Component {
    constructor(props){
      super(props);
      this.state={

      };
    }
    
  
  
  render() {
    
    const techCompanies = [
        { label: "Apple", value: 1 },
        { label: "Facebook", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Tesla", value: 4 },
        { label: "Amazon", value: 5 },
        { label: "Alphabet", value: 6 },
        // {label:<span className="someClass"><img src="https://../../Images/apple.jpeg" alt="logo"></img></span>,value: 1},
        // {label:<span className="someClass"><img src="https://../../Images/apple1.jpeg" alt="logo1"></img></span>,value: 2}
      ];

      const array=["abc","def","ghi","lmn"];


    return (
      <div>
          <Select options={ techCompanies } isMulti/>

          {/* <ImageSelect
              images={['../../Images/apple.jpeg', '../../Images/apple1.jpeg', '../../Images/orange.jpeg']}
              width={20}
              height={20}
              defaultIndex={2} // will select pear.png
              // onChange={this._handleChange}
              /> */}
              {
                array.map((item,index) =>(
                  {item}
                  ))}

               {/* {this.state.array1.map((ans)=>(
                <div>
                <input type="radio" name={ans.qid}/> {ans.answer}
                </div>
            ))} */}

      </div>
    );
  }
}


export default MultiSelect;

// import React, { Component } from 'react';

// import { Select, Trigger, OptionList, Option, utils } from 'Selectly';
// const { getToggledValues } = utils
 
// class MultiSelect extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       defaultValue: 'Select a color',
//       currentValues: []
//     }
//   }
 
//   _handleChange(value) {
//     this.setState({
//       currentValues: getToggledValues(this.state.currentValues, value)
//     })
//   }
 
//   render() {
//     const { defaultValue, currentValues } = this.state
//     return (
//       <Select
//         multiple
//         onChange={value => this._handleChange(value)}
//       >
//         <Trigger>
//           { currentValues.length > 0
//             ? currentValues.join(', ')
//             : defaultValue
//           }
//         </Trigger>
//         <OptionList tag="ul" className="react-select-menu">
//           <Option value="red">Red</Option>
//           <Option value="green">Green</Option>
//           <Option value="blue">Blue</Option>
//         </OptionList>
//       </Select>
//     )
//   }
// }
// export default MultiSelect;

import React, { Component } from 'react';
import { Table } from 'react-bootstrap';



class TableMerge extends Component{
    render(){
        return(
//             <Table striped bordered hover>
//               <tr> 
//                 <th>65</th> 
//                 <th>40</th> 
//                 <th colspan="3" className="centerAlign">20</th> 
//                 <th>10</th>
//                 </tr>

//                 <tr>
//                    <th>Men</th> 
//                    <th>Women</th>
//                     <th>Men</th> 
//                     <th>Women</th>
//                      <th>Men</th>
//                      <th>women</th>
//                        </tr> 
//                        <tr> 
//                          <td>82</td> 
//                          <td>85</td>
//                           <td>78</td>
//                            <td>82</td>
//                             <td>77</td> 
//                             <td>60</td>
//                              </tr>


  
// </Table>
<Table bordered>
 <caption>Favorite and Least Favorite Things</caption>
 <tr>
  <th></th><th></th>
  <th>Bob</th>
  <th>Alice</th>
 </tr>
 <tr>
  <th rowspan="2">Favorite</th>
  <th>Color</th>
  <td>Blue</td>
  <td>Purple</td>
 </tr>
 <tr>
  <th>Flavor</th>
  <td>Banana</td>
  <td>Chocolate</td>
 </tr>
 <tr>
  <th>Least Favorite</th>
  <th>Color</th>
  <td>Yellow</td>
  <td>Pink</td>
 </tr>
 <tr>
  <th>Flavor</th>
  <td>Mint</td>
  <td>Walnut</td>
 </tr>
</Table>


            
        )
    }

}
export default TableMerge;

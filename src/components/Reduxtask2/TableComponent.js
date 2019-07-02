import React, { Component } from 'react';
import {Table} from 'reactstrap';

class TableComponent extends Component {
    render() {
        return (
            <div>
                <Table>
    <thead>
        <tr className="">
            <th>FName</th>
            <th>Lname</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        {this.props.option.map((item,index)=>
        (
        <tr key={index}>
          <td>{item.fnmae}</td>
          <td>{item.lname}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
        </tr>
        ))}
      </tbody>

    </Table>
                
            </div>
        );
    }
}

export default TableComponent;
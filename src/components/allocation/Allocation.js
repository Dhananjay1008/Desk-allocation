import React, { Component } from "react";
import styles from './Allocation.css';
import { Button,Dropdown,Form,DropdownButton  } from 'react-bootstrap';
import ToggleSwitch from "../ToggleSwitch";

class Allocation extends React.Component {
    state = {
        user: this.props.response.username,
        role: this.props.response.role,
        employees: this.props.response.response.emp,
        seats: Number((this.props.response.response.emp*0.65).toFixed(0)),
        departmentlist: this.props.response.response.departments,
        subDepartmentlist: this.props.response.response.subDepartments,
        officelist: this.props.response.office
    }
   render() {
console.log("test1:"+JSON.stringify(this.state.role));
    const today = new Date();
      return (
      <div>
             <Form className="container">
                <Form.Label>Select department</Form.Label>
                <Form.Select className="department-list" aria-label="Default select example">
                  <option>Select Department</option>
                  {this.state.departmentlist.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
                {this.state.role === "manager" &&
                <span>
                <Form.Label>Select sub-department</Form.Label>
                <Form.Select className="department-list" aria-label="Default select example">
                                  <option>Select sub-department</option>
                                  {this.state.subDepartmentlist.map(value => {
                                    return <option value={value}>{value}</option>
                                  })}
                </Form.Select>
                </span>
                }
                <Form.Label>Office</Form.Label>
                <Form.Select className="department-list" aria-label="Default select example">
                  <option>Select Office</option>
                  {this.state.officelist.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
                <Form.Label>Employee count</Form.Label>
                <Form.Control type="name" placeholder="" value={this.state.employees} className="empCount" disabled/>
                <Form.Label>Allocate seats</Form.Label>
                <Form.Control type="number" placeholder="" value={this.state.seats} className="empCount" />
                <div className="date-range">
                    <Form.Label>Date from</Form.Label>
                    <Form.Control type="date" placeholder="" minValue={today}/>
                    <Form.Label className="date-to">Date to</Form.Label>
                    <Form.Control type="date" placeholder="" />
                </div>
                <Button className="btn" variant="primary" type="submit">
                 Submit
                </Button>
             </Form>
      </div>
      );
   }
}
export default Allocation;
import React from "react";
import styles from './Report.css';
import { Button,Dropdown,Form,DropdownButton  } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Report extends React.Component {
    state = {
        user: this.props.response.username,
        role: "manager",
//        role: this.props.response.role,
        employees: this.props.response.response.emp,
        seats: Number((this.props.response.response.emp*0.65).toFixed(0)),
        departmentlist: this.props.response.response.departments,
        officelist: this.props.response.office,
        subDepartmentlist: this.props.response.response.subDepartments,
        selectedDept: "",
        selectedSubDept: "",
        selectedOffice: "",
        selectedDate: "",
        responseSuccess: false
    }
    response_data = "MBHY, 20200918, 1\n MHBY1, 20200918, 2\n MBHY, 20200919, 3\n MBHY1, 20200919, 2\n MBHY, 20200920, 1\n MBHY1, 20200920, 3\n";
    depts = []
    dates = []
    data = []
    rows = [
      this.createData('Project 1', 32, 32, 32, 32, 32),
      this.createData('Project 2', 32, 32, 32, 32, 32),
      this.createData('Project 3', 46, 46, 46, 46, 46)
    ];
    createData(prj, mon, tue, wed, thu, fri) {
      return { prj, mon, tue, wed, thu, fri };
    }
    handleDeptChange = (e) => {
       this.setState({
           selectedDept: e.target.value
       });
    }
    handleSubDeptChange = (e) => {
       this.setState({
           selectedSubDept: e.target.value
       });
    }
    handleOfficeChange = (e) => {
       this.setState({
           selectedOffice: e.target.value
       });
    }
    handleDateFromChange= (e) => {
       this.setState({
           selectedDate: e.target.value
       });
    }
    handleSubmit = (e) => {
       e.preventDefault();
       let body = {};
       const that = this;
       body = {
           username: this.props.response.username,
           department_id: this.state.selectedDept,
           sub_department_id: this.state.selectedSubDept,
           date: this.state.selectedDate
       }
       this.setState({
        responseSuccess: true
       });
        const response_rows = this.response_data.split(/\r?\n/);
        response_rows.map(row => {
            let array = row.split(",");
            if(array[0] && array[1] && array[2]){
                const dept = array[0].trim();
                const date = array[1].trim();
                const seats = array[2].trim();

            console.log("dept"+dept+" date"+date+" seats"+seats);
            if(that.depts.indexOf(dept) < 0) that.depts.push(dept);
            if(that.dates.indexOf(date) < 0) that.dates.push(date);
            }
        });
       console.log("request:"+JSON.stringify(body));
    }
   render() {
      return (
          <div>
             <Form className="container">
                <Form.Label>Select Department</Form.Label>
                <Form.Select onChange={this.handleDeptChange} className="department-list" aria-label="Default select example">
                  <option>Select Department</option>
                  {this.state.departmentlist.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
                <Form.Label>Office</Form.Label>
                <Form.Select onChange={this.handleOfficeChange} className="department-list" aria-label="Default select example">
                  <option>Select Office</option>
                  {this.state.officelist.map(value => {
                    return <option value={value}>{value}</option>
                  })}
                </Form.Select>
                {this.state.role === "manager" &&
                <>
                <Form.Label>Select Sub-department</Form.Label>
                <Form.Select onChange={this.handleSubDeptChange} className="department-list" aria-label="Default select example">
                      <option>Select Sub-department</option>
                      {this.state.subDepartmentlist.map(value => {
                        return <option value={value}>{value}</option>
                      })}
                </Form.Select>
                <div className="date-range">
                    <Form.Label>Date </Form.Label>
                    <Form.Control onChange={this.handleDateFromChange} type="date" placeholder="" />
                </div>
                </>
                }
                <Button className="btn" variant="primary" type="submit" onClick={this.handleSubmit} >
                 View allocation
                </Button>
             </Form>
             {this.state.role === "manager" && this.state.responseSuccess &&
             <>
             <div className="table-header">
                 <p><strong>Employee count: </strong>{this.state.employees}</p>
                 <p><strong>Allocated seats: </strong>{this.state.seats}</p>
             </div>
             <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                 <TableHead>
                   <TableRow>
                     <TableCell>Project</TableCell>
                     <TableCell align="right">Mon</TableCell>
                     <TableCell align="right">Tue</TableCell>
                     <TableCell align="right">Wed</TableCell>
                     <TableCell align="right">Thu</TableCell>
                     <TableCell align="right">Fri</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {this.rows.map((row) => (
                     <TableRow
                       key={row.name}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                       <TableCell component="th" scope="row">
                         {row.prj}
                       </TableCell>
                       <TableCell align="right">{row.mon}</TableCell>
                       <TableCell align="right">{row.tue}</TableCell>
                       <TableCell align="right">{row.wed}</TableCell>
                       <TableCell align="right">{row.thu}</TableCell>
                       <TableCell align="right">{row.fri}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer>
             </>
             }
          </div>
      );
   }
}
export default Report;
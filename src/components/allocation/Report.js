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
        role: this.props.response.role,
        employees: this.props.response.response.emp,
        seats: Number((this.props.response.response.emp*0.65).toFixed(0)),
        departmentlist: this.props.response.response.departments,
        subDepartmentlist: this.props.response.response.subDepartments
    }
    rows = [
      this.createData('Project 1', 32, 32, 32, 32, 32),
      this.createData('Project 2', 32, 32, 32, 32, 32),
      this.createData('Project 3', 46, 46, 46, 46, 46)
    ];
    createData(prj, mon, tue, wed, thu, fri) {
      return { prj, mon, tue, wed, thu, fri };
    }
   render() {
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
                <>
                <Form.Label>Select sub-department</Form.Label>
                <Form.Select className="department-list" aria-label="Default select example">
                                  <option>Select sub-department</option>
                                  {this.state.subDepartmentlist.map(value => {
                                    return <option value={value}>{value}</option>
                                  })}
                </Form.Select>
                <div className="date-range">
                    <Form.Label>Date </Form.Label>
                    <Form.Control type="date" placeholder="" />
                </div>
                </>
                }
                <Button className="btn" variant="primary" type="submit">
                 View allocation
                </Button>:q

                <Form.Label>Employee count</Form.Label>
                <Form.Control type="name" placeholder="" value={this.state.employees} className="empCount" disabled/>
                <Form.Label>Allocate seats</Form.Label>
                <Form.Control type="number" placeholder="" value={this.state.seats}/>
             </Form>
             {this.state.role === "manager" &&
             <>
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
import React from "react";
import Home from './allocation/Home';
import Allocation from './allocation/Allocation';
import Report from './allocation/Report';
import LoginPage from './login/LoginPage';
import styles from './App.css';
import {
   BrowserRouter as Router,
   Link,
   Routes,
   Route
} from 'react-router-dom';
class App extends React.Component {
   state = {
        username: "",
        role: "",
        loginsuccess: "",
        response: {
            emp: 253,
            departments: [
                "CTO","FSG","IWM"
            ],
            subDepartments: [
                "CTO1","CTO2"
            ]
        }
   }
   handleCallback = (obj) => {
   console.log("from app"+obj.role);
    this.setState({
        username: obj.name,
        role: obj.role,
        loginsuccess: obj.loginsuccess,
        response: {
            emp: 200,
            departments: [
                "CTO","FSG","IWM"
            ],
            subDepartments: [
                "CTO1","CTO2","CTO3"
            ]
        }
    })
   }
   render() {
      return (
         <div>
         {this.state.loginsuccess ?
         <Router>

           <div className="topnav">
             <Link to="/">Home</Link>
             <Link to="/report">Reports</Link>
             <Link to="/allocation">Allocation</Link>
           </div>
           <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/report' element={<Report response={this.state}/>} />
             <Route path='/allocation' element={<Allocation response={this.state}/>} />
           </Routes>

          </Router> :

         <LoginPage parentCallback={this.handleCallback}/> }
         </div>
      );
   }
}
export default App;
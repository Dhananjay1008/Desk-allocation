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
        office: ["EON1"],
        response: {
            emp: 253,
            departments: [
                "CTO","FSG","IWM"
            ],
            subDepartments: [
                "CTO1","CTO2"
            ]
        },
        homeLinkActive: true,
        manageLinkActive: false,
        viewLinkActive: false
   }
   handleCallback = (obj) => {
   console.log("from app"+obj.role);
    this.setState({
        username: obj.name,
        role: obj.role,
        loginsuccess: obj.loginsuccess,
        response: {
            emp: 200,
            departments: obj.departments,
            subDepartments: obj.subDepartments
        }
    })
   }
   handleNavLink = (e) => {
        const id = e.target.id;
        this.setState({
        homeLinkActive: false,
        manageLinkActive: false,
        viewLinkActive: false
        });

        console.log("test:"+id);
        switch(id) {
            case 'homelink': this.setState({homeLinkActive: true});
                            break;
            case 'managelink': this.setState({manageLinkActive: true});
                            break;
            case 'viewlink': this.setState({viewLinkActive: true});
                            break;
        }
   }

   render() {
      return (
         <div>
         {this.state.loginsuccess ?
         <Router>

           <div className="topnav">
             <Link id="homelink" className={this.state.homeLinkActive ? 'active' : ''} to="/" onClick={this.handleNavLink}>Home</Link>
             <Link id="managelink" className={this.state.manageLinkActive ? 'active' : ''} to="/allocation" onClick={this.handleNavLink}>Manage Allocation</Link>
             <Link id="viewlink" className={this.state.viewLinkActive ? 'active' : ''} to="/report" onClick={this.handleNavLink}>View Allocation</Link>
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
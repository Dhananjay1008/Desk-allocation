import React from "react";
import styles from './Home.css';
import Allocation from './Allocation';
import Report from './Report';
import {
   BrowserRouter as Router,
   Link,
   Routes,
   Route
} from 'react-router-dom';
class Home extends React.Component {
   render() {
      return (
         <div>
         This is home
         </div>
      );
   }
}
export default Home;
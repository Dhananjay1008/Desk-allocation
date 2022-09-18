import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Header.css';

export default function Header() {
return(
   <React.StrictMode>
       <div className="appTitle">
         <span className="title">Space Allocation Tool</span><br />
         <i>by The Rangers</i>
       </div>
   </React.StrictMode>
);
}
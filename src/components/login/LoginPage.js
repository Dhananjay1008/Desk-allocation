import React from "react";
import styles from './LoginPage.css';
class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        role: "",
        loginsuccess: true
    }
    onClickHandler = (e) => {
        e.preventDefault();
        const that = this;
        let body = {
          username: e.target.uname.value,
          password: e.target.upswd.value,
          title: "This is POST request with body",
          completed: true
        };
        fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          body: JSON.stringify(body)
        })
          .then(response => {
            let json = response.json();
            console.log(json);
            that.setState({
                loginsuccess: true,
                role: e.target.urole.value
            })
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
          console.log("from login"+ JSON.stringify(that.state));
            this.props.parentCallback(that.state);
            return response.blob();
          })
          .catch(error => {
            console.error(
              "There has been a problem with your fetch operation:",
              error
            );
          });
    }
    render() {
      return (
         <form onSubmit={this.onClickHandler}>

           <div className={styles.container}>
             <label for="uname"><b>Username</b></label>
             <input type="text" placeholder="Enter Username" name="uname" required />

             <label for="upswd"><b>Password</b></label>
             <input type="password" placeholder="Enter Password" name="upswd" required />

             <label for="urole"><b>Role</b></label>
             <select name="urole">
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
             </select>

             <button type="submit">Login</button>

           </div>


         </form>
      );
      }
}
export default LoginPage;
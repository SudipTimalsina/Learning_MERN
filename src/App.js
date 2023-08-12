// import logo from './logo.svg';
// import './App.css';
import { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
class App extends Component{
  constructor(){
    super();
    this.state = {
      userLoggedIn: false,
      user: {},
    };
    this.loginUser =this.loginUser.bind(this);
   }
   loginUser(user) {
     this.setState({userLoggedIn: true, user: user});
    }
  render(){ 
          if (this.state.userLoggedIn){
            return<Home user = {this.state.user}/>;
          }   
          else{
            return <Login loginUser= {this.loginUser}/>;
          }
        }   
} 
export default App;

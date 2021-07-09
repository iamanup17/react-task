import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { useState } from 'react';


function App() {

  const adminUser = {
    name:"admin@admin.com",
    password:"admin123"
  }

  const [user , setUser] = useState({name:"" , password:""});
  const [error , setError] = useState("");

  const Loginp = details =>{
    console.log(details)
    if(details.name == adminUser.name && details.password == adminUser.password){
      console.log("logged in")
      setUser({
        name:details.name,
        password:details.password
      })
    }else{
      console.log("details not matched")
      setError("details not matched");
    }

  }

 
  return (
    <>
      {/* <h1>Hello World </h1> */}

      <Router>
        <Header />

        
       

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}>
            <Login  Login={Loginp} error={error} />
          </Route>
          <Route exact path="/signup" component={Signup}></Route>

          

        </Switch>
      </Router>

      

       

        
          
    </>
  );
}

export default App;

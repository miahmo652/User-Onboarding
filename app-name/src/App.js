import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./form.js";
import Users from "./components/Users.js"
function App() {

  const [users, setusers] = useState([])
const user = (object)=> {
  setusers([...users, object])
}
console.log(users)
  return (
    <div className="App">
      <h1>Sign up</h1>
      <Form use={user}
      
      />
      <Users 
      sers={users}/>
    </div>
  );
}

export default App;

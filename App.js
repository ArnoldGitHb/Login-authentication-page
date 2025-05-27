
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import login from './loginicon.jpg'
import React, { useState } from 'react'
import swal from 'sweetalert'

function App() {

  const[user,setUser] =useState('') 
  const[pass,setPass] =useState('') 

  const handleValidate=(e)=>{
    e.preventDefault()
    if(user == 'Nairobi254@gmail.com' && pass== 'kenyadaima')
      swal("Login Successful", "Welcome Mwananchi")
    else
      swal("Login unsuccessful","Error")



  }

  return (
    <div className="App-header">
      <h1> Authentication Portal </h1>
      <div className="row">
      <div className="col-md-6">
        <img className="float-right" src={login} width="230px" />
          
      </div>
      <div className="col-md-6 my-auto bg-dark p-3 rounded">

        <form onSubmit={handleValidate}>
  <div className="mb-3">

    <label className="form-label">Email address</label>
    <input type="email" value={user} className="form-control" placeholder= "Enter email"onChange={(e)=>setUser(e.target.value)}  />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" value={pass} className="form-control" placeholder ="Enter password" onChange={(e)=>setPass(e.target.value)} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
      </div>
    </div>
  );
}

export default App;

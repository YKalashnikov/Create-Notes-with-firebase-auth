import React, {useContext, useState} from 'react';
import { AlertContext }  from '../context/alert/alertContext'
import Auth from '../components/Auth.js'

const Authorization = () => {
    const alert = useContext(AlertContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
   const emailHandle = (e) =>{
      setEmail(e.target.value)
   }
   const passwordHandle = (e) =>{
    setPassword(e.target.value)
 }
 const handleSubmit = (e) =>{
    e.preventDefault()
    if(password.trim() && email.trim()){
        AuthWithEmailPassword(email, password)
            
    alert.show('Check your credentials', 'danger')
    }else {
        alert.show('Check your credentials', 'danger')
    }
    
}
 const AuthWithEmailPassword = (email, password) =>{
    const url =  process.env.AUTH_FIREBASE
    console.log(url)
     return fetch(url,
         {method: 'POST',
        body: JSON.stringify({
            email,
            password,
            returnSecureToken: true
        }),
    headers: {'Content-Type': 'application/json'}
})
.then(res => res.json())
.then(data => data.idToken)
 }


    return (
        <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label >Email address</label>
    <input onChange={emailHandle} type="email" className="form-control"  aria-describedby="emailHelp" value={email}/>
    <small  className="form-text text-muted">Enter at you own risk</small>
    </div>
    <div className="form-group">
    <label >Password</label>
    <input onChange={passwordHandle} type="password" className="form-control" id="exampleInputPassword1" value={password}/>
    </div>
     <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default Authorization;
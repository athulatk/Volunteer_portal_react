import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import axios from 'axios'
import './Signup.css'
function Signup() {

    const[name,setName]=useState("");
    const[designation,setDesignation]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
    const[status,setStatus]=useState("");
    let history=useHistory();

    function onSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:3001/auth/Signup",{
          name:name,
          email:email,
          designation:designation,
          password:password,
          confirm:confirm
        }).then((res) => {
            if(res.data.message){
                setStatus(res.data.message);
            }
            else{
                
                setStatus("Registration Successful!!")
            }
            
        }).catch(error =>{
            console.log(error)
        })
     
    }

    return (
        <div>
            <Navbar1/>
            <Navbar2/>
            <h2 className="sign_up">Sign up</h2>
            <form className="signup__form" onSubmit={onSubmit}>
            <p className="form2__lab">Name </p>
            <input onChange={(e)=>{setName(e.target.value)}} className="form2__input" type="text" name="name" value={name} required/>
            <p className="form2__lab">Choose role:</p>
            <input onChange={(e)=>{setDesignation(e.target.value)}} type="radio" name="designation" value="student" required/> <label className="radio_1">Student/Volunteer</label><br/>
            <input onChange={(e)=>{setDesignation(e.target.value)}} type="radio" name="designation" value="organization"/> <label className="radio_1">Organization</label><br/>
            <p className="form2__lab">Email </p>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="form2__input" type="email" name="email" value={email} required/>
            <p className="form2__lab">Password </p>
            <input onChange={(e)=>{setPassword(e.target.value)}} className="form2__input" type="password" value={password} required/>
            <p className="form2__lab">Confirm Password </p>
            <input onChange={(e)=>{setConfirm(e.target.value)}} className="form2__input" type="password" value={confirm} required/>
            <br/><br/>
            <div className="btn">
            <button className="form__btn" type="submit">Submit</button>
            </div>
            </form>
            <br/>
            <h5 style={{textAlign:"center",color:"red"}}>{status}</h5>
            </div>
    )
}

export default Signup

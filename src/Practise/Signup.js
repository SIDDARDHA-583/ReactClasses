import React, {useState} from 'react'
import axios from 'axios'

const Signup = () => {
    const [data , setData] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
    })
    const {username , email ,password ,confirmpassword} = data;
   
    const changeHandler = e => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submit = e => {
        e.preventDefault();
        // if(username.length <=5 ){
        //     alert("username must be 5 characters")
        // }

        // else if(password !== confirmpassword){
        //    alert("password are not matching")
        // }else{
        //     console.log(data)
        // }
        axios.post("https://signup-b10e0-default-rtdb.firebaseio.com/register.json" , data)
        .then(() => alert("submitted Successfully"))
    }

    return(
       <div className="container">
           <h2 className="text-primary text-center">SignUp</h2>
           <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-lg-6">
               <form onSubmit={submit}>
                   <div className="mt-3">
                       <label>Username</label>
                       <input type="text" className="form-control" placeholder="Enter Username" value={username} name="username" onChange={changeHandler} />
                   </div>
                   <div className="mt-3">
                       <label>Email</label>
                       <input type="email" className="form-control" placeholder="Enter Email"value={email} name="email" onChange={changeHandler} />
                   </div>
                   <div className="mt-3">
                       <label>Password</label>
                       <input type="password" className="form-control" placeholder="Enter Password" value={password} name="password" onChange={changeHandler} />
                   </div>
                   <div className="mt-3">
                       <label>Conform Password</label>
                       <input type="password" className="form-control" placeholder="Enter Cofirm Password" value={confirmpassword} name="confirmpassword" onChange={changeHandler} />
                   </div>
                   {password !== confirmpassword ? <p className="text-danger">Password not matching</p> : null}
                   <div className="mt-3">
                       <input type="submit" className="btn btn-primary" name="submit"/>
                   </div>
               </form>
               </div>
               <div className="col-lg-3"></div>
           </div>
       </div>
    )
}
export default Signup;
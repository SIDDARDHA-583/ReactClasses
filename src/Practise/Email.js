import React, {useState} from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'

const Email = () => {
    const [data , setData] = useState({
        subject : '',
        email : '',
        message : ''
        
    })
    const {subject , email , message} = data;
   
    const changeHandler = e => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const submit = e => {
        e.preventDefault();
        emailjs.sendForm('service_8id9d4c', 'template_p8o67c5', e.target, 'user_aKozknJrsBF5q4QxpLAZJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        // if(username.length <=5 ){
        //     alert("username must be 5 characters")
        // }

        // else if(password !== confirmpassword){
        //    alert("password are not matching")
        // }else{
        //     console.log(data)
        // }
        // axios.post("https://signup-b10e0-default-rtdb.firebaseio.com/register.json" , data)
        // .then(() => alert("submitted Successfully"))
    }

    return(
       <div className="container">
           <h2 className="text-primary text-center">Email</h2>
           <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-lg-6">
               <form onSubmit={submit} autoComplete="off">
                   <div className="mt-3">
                       <label>Subject</label>
                       <input type="text" className="form-control" placeholder="Enter Subject" value={subject} name="subject" onChange={changeHandler} />
                   </div>
                   <div className="mt-3">
                       <label>Email</label>
                       <input type="email" className="form-control" placeholder="Enter Email"value={email} name="email" onChange={changeHandler} />
                   </div>
                   <div className="mt-3">
                       <label>Message</label>
                       <input type="text" className="form-control" placeholder="Enter Message" value={message} name="message" onChange={changeHandler} />
                   </div>
                   {/* <div className="mt-3">
                       <label>Conform Password</label>
                       <input type="password" className="form-control" placeholder="Enter Cofirm Password" value={confirmpassword} name="confirmpassword" onChange={changeHandler} />
                   </div>
                   {password !== confirmpassword ? <p className="text-danger">Password not matching</p> : null} */}
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
export default Email;
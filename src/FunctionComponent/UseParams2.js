import React , {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

const users = [
    {name : "Alex" , city : "Bangalore" , mobile : [1111111111,22222222222,3333333333] , age : "20years" ,pic : "1.jpg"},
    {name : "uday" , city : "Bangalore" , mobile : [44444444444,5555555555] , age : "30years" ,pic : "2.jpg"},
    {name : "upendra" , city : "Bangalore" , mobile : [6666666666] , age : "40years" ,pic : "3.jpg"},
    {name : "guna" , city : "Bangalore" , mobile : [8888888888] , age : "50years" ,pic : "4.jpg"},
    {name : "vijay" , city : "Bangalore" , mobile :[3333333333, 4444444444] , age : "60years" ,pic : "5.jpg"}
]

function UseParams2(){
    const[myusers , updateUsers] = useState(users)
    const{index} = useParams();  // it use to capture value coming to url/path

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>useParams() Hooks Example</h2>
                    <h1 className="text-danger">Your Id is: {index}</h1>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <ul>
                        <li className="list-group-item active">Available Users</li>
                        {
                            myusers.map((user,index) => {
                                return(
                                    <li className="list-group-item" key={index}>
                                        <Link to={`/${index}/useparams2`}>{user.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h5>About Profile</h5>
                    <div className="bg-white p-3">
                        <p>Full Name : {myusers[index].name}</p>
                        <p>Mobile No : 
                            {
                                myusers[index].mobile.map(mymobile => {
                                  return(
                                      <label className="m-3 badge badge-info p-2 rounded-pill">{mymobile}</label>
                                  )
                                })
                            }
                        </p>
                        <p>Age : {myusers[index].age}</p>
                        <p>City : {myusers[index].city}</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h5>Profile Picture</h5>
                    <img src={myusers[index].pic} className="img-fluid img-thumbnail" />
                </div>
            </div>
        </div>
    );
}

export default UseParams2;
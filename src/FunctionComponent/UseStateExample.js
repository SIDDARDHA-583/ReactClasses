import React, {useState} from 'react'
import UserInfo from './UserInfo';

const UseStateExample = () => {
    //  const[variable , function] = useState(default value for a Variable) 
    const [counter , updateCounter] = useState(10);
    const [message , processMessage] = useState("");
    //const[current value , updated value] = useState(default Value for a Variable)
    const plus = () => {
        updateCounter(counter + 5)
        processMessage("Hi Your Clicking + Button")
    }

    const minus = () => {
        updateCounter(counter - 5)
        processMessage("Hi Your Clicking - Minus Button")
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="text-primary">Hooks useState Simple Example</h3>
                    <h1 className="text-warning">{counter}</h1>
                    <p className="text-danger">{message}</p>
                    <button className="btn btn-success rounded-pill" onClick={plus}>Click To + by 5</button>
                    <button className="btn btn-warning rounded-pill" onClick={minus}>Click To - by 5</button>
                </div>
               
                <UserInfo  fullname="siddu" pic="3.jpg" Phone="9010090363" Age="21" City="Bangalore"/>
                <UserInfo  fullname="silpa" pic="2.jpg" Phone="9010090363" Age="20" City="Venkatagiri"/>
            
            </div>
        </div>
    )
}
export default UseStateExample;
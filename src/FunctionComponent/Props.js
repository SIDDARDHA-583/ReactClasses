import React , {useState} from 'react';
import UserInfo from './UserInfo';

const users = [
    {name : "Alex" , city : "Bangalore" , mobile : 1111111111 , age : "20years" ,pic : "1.jpg"},
    {name : "uday" , city : "Bangalore" , mobile : 4444444444 , age : "30years" ,pic : "2.jpg"},
    {name : "upendra" , city : "Bangalore" , mobile : 6666666666 , age : "40years" ,pic : "3.jpg"},
    {name : "guna" , city : "Bangalore" , mobile : 8888888888 , age : "50years" ,pic : "4.jpg"},
    {name : "vijay" , city : "Bangalore" , mobile :3333333333 , age : "60years" ,pic : "5.jpg"}
]

const Product = () => {
    const[myusers , updateUsers] = useState(users);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Props , component reuse component intration Example</h3>
                    <h2>Total Users : {myusers.length}</h2>
                    
                </div>
                <div className="row">
                    {myusers.map((user,index) => {
                        return(
                            <UserInfo key={index} fullname={user.name} pic={user.pic} Phone={user.mobile} Age={user.age} City={user.city}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Product;
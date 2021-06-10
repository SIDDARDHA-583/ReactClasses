import React, {useState} from 'react'

const allusers = [
    {name : "Ramesh" , age : "30" , mobile : "9010090363"},
    {name : "siddu" , age : "21" , mobile : "9010090363"},
    {name : "vijay" , age : "30" , mobile : "9010090363"},
    {name : "guna" , age : "30" , mobile : "9010090363"},
    {name : "surya" , age : "30" , mobile : "9010090363"},
]

const useStateSingleArray = () => {
    //  const[variable , function] = useState(default value for a Variable) 
    const [items , updateItems] = useState(["Apple","Banana" , "mango" , "PineApple" , "Guva"]);
    const [books , updateBooks] = useState(["Java","c" , "C++" , "Javascript" , "Nodejs"]);

    //multi dimesional array

    const [users , updateUser] =useState(allusers);

    //const[current value , updated value] = useState(default Value for a Variable)
   

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="text-primary font-weight-bold">Hooks useState Array Single Dimensional Simple Example</h3>
                    
                </div>
                <div className="col-lg-3 mt-3">
                    <h4 className="text-success font-weight-bold mb-4">Item Lists</h4>
                    {
                        items.map((item,index) => {
                            return(
                                <p key={index}>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="col-lg-3 mt-3">
                    <h4 className="text-success font-weight-bold mb-4">Books Lists</h4>
                    {
                        books.map((book,index) => {
                            return(
                                <p key={index}>{book}</p>
                            )
                        })
                    }
                </div>
                <div className="col-lg-6">
                    <h4>Users List</h4>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.mobile}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default useStateSingleArray;
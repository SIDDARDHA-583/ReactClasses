import React , {useState} from 'react'

const UseStateMulti = () => {
   
    const [msg , updatedMsg] = useState("")

    const [users , Updateduser] = useState([{name : "siddu" , age : 21 , city : "Bangalore"}]);
    const [newname , processName] = useState("")
    const [newage , processAge] = useState("")
    const [newcity , processCity] = useState("")

    const Save = () => {

        if(userid === -1){
            let newuser = {
                name : newname ,
                age : newage ,
                city : newcity
            }
            Updateduser(users => [...users , newuser]);
            updatedMsg("New User Added Successfully");
        }else{
            users[userid].name = newname;
            users[userid].age = newage;
            users[userid].city = newcity;
            Updateduser(users => [...users]); //  update in state Array
            processUserid(-1); // after Updating the user we set the user id -1 default
            updatedMsg("User Information Upadted Successfully")
        }

        processName("");
        processAge("");
        processCity("")
    }

   const [userid ,processUserid] = useState(-1)

    const Edit = (index) =>{
        processName(users[index].name);
        processAge(users[index].age);
        processCity(users[index].city);
        processUserid(index) //taking index of element and storing under state
    }
 
    const Delete = (index) => {
        users.splice(index,1)
        Updateduser(users => [...users])
        updatedMsg("User deletd Successfully")

    }


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <h3>UseState () add , delete , list in array Example - {userid}</h3>
                    <p className="text-danger">{msg}</p>
                    <p>Available Users - : {users.length}</p>
                </div>
                <div className="col-lg-3">
                    <input type="text" placeholder="Enter Your Name" className="form-control" value={newname} onChange={obj => processName(obj.target.value)} />
                </div>
                <div className="col-lg-3">
                    <input type="number" placeholder="Enter Your Age" className="form-control" value={newage} onChange={obj => processAge(obj.target.value)} />
                </div>
                <div className="col-lg-3">
                    <input type="text" placeholder="Enter Your City" className="form-control" value={newcity} onChange={obj => processCity(obj.target.value)} />
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-primary rounded-pill" onClick={Save}>Add Users</button>
                </div>
                <div className="col-lg-12 mt-4">
                    <table className="table table-bordered">
                        <thead className="bg-warning text-center">
                            <tr>
                                <th>User Id</th>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index) => {
                                    return(
                                        <tr key={index} className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.city}</td>
                                            <td><button className="btn btn-success m-0 btn-sm rounded-pill" onClick={Edit.bind(this,index)}>Edit</button></td>
                                            <td><button className="btn btn-danger m-0 btn-sm rounded-pill" onClick={Delete.bind(this,index)}>Delete</button></td>
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
export default UseStateMulti;
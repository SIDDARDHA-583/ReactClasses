import React , {Component} from 'react'

class State1 extends Component{
    constructor(){
        super();
        this.state = {
            userlist : ["Ramesh" , "Suresh" , "Siddu" ,"Vijay"],
            newuser: '',
            message: ''
        }
    }

    processName = (obj) => {
       this.setState({
           newuser : obj.target.value
       })
    }

    save = () => {
        this.setState({
            userlist : this.state.userlist.concat(this.state.newuser),
            message : this.state.newuser + " Addes Successfully"
        })
    }

    deleteUser = (no) => {
        this.state.userlist.splice(no,1);
        this.setState({
            userlist : this.state.userlist,
            message :  "User deleted Successfully"
        })
    }

    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className = "col-lg-12 text-center">
                        <p className="text-success font-weight-bold">{this.state.message}</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>Enter New User</h4>
                        <input type="text" className="form-control" placeholder="Enter Your Name" onChange={this.processName} />
                        <button className="btn btn-sm btn-success rounded-pill mt-3" onClick={this.save}>Add User</button>
                    </div>
                    <div className="col-lg-3 p-3">
                        <p>The new name is : </p>
                        <p className="text-success font-weight-bold">{this.state.newuser}</p>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text-primary font-weight-bold">1 Array  , Read , write, Delete using State Management</h5>
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userlist.map((user,index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{user}</td>
                                                <td><button className="btn btn-sm btn-danger rounded-pill" onClick={this.deleteUser.bind(this,index)}>Delete</button></td>
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
}
export default State1;
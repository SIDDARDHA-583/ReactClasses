import React , {Component} from 'react'
import axios from 'axios' // 2nd API to send and recieve data from server.

class Axiosdata extends Component{

    constructor(){
        super();
        this.state = {
            recordList : [],
            //fieldlist : {"fname" : "siddu" , "mobile" : "9010090363", "email" : "nidigintisiddardha111@gmail.com" },
            fieldlist : {},
            message : ""
        }
    }

    getRecord = () => {
        axios.get("http://www.firstenquiry.com/api/react/crud/list.php")
        .then(response => {
            if(response.data.length > 0) {
                this.setState({
                    recordList : response.data
                })
            }
        })
    }

    //auto call after render
    componentDidMount() {
        this.getRecord();
    }

    processInput = (obj) => {
        let fieldlist = this.state.fieldlist;
        fieldlist[obj.target.name] = obj.target.value;
        this.setState({
            fieldlist
        })
    }

    save = () => {
        let url = "http://www.firstenquiry.com/api/react/crud/save.php";
        //{"fname" : "siddu" , "mobile" : "9010090363", "email" : "nidigintisiddardha111@gmail.com" }, as json body
        let jsonData = JSON.stringify(this.state.fieldlist); // to convert from array to json
        axios.post(url , jsonData)
        .then(response => {
            this.setState({
                message : response.data
            })
            this.getRecord(); // to reload the list
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Add Customer</h4>
                        <div className="mb-3 ">
                            <label >Customer Name</label>
                            <input type="text" 
                            className="form-control" 
                            placeholder="Enter Name" 
                            name="fname"
                            onChange = {this.processInput}
                            ></input>
                        </div>
                        <div className="mb-3 ">
                            <label >Customer Mobile No</label>
                            <input type="number" 
                            className="form-control" 
                            placeholder="Enter Mobile" 
                            name="mobile"
                            onChange = {this.processInput}
                            ></input>
                        </div>
                        <div className="mb-3 ">
                            <label >Customer Email</label>
                            <input type="eamil" 
                            className="form-control" 
                            placeholder="Enter Email" 
                            name="email"
                            onChange = {this.processInput}
                            ></input>
                        </div>
                        <button className="btn btn-primary rounded-pill" onClick= {this.save}>Save Customer</button>
                    </div>
                    <div className="col-lg-8">
                        <h4 className="text-center">Available Customer : {this.state.recordList.length}</h4>
                        <p className= "text-center font-weight-bold text-success">{this.state.message}</p>
                        <table className="table table-bordered mt-4">
                            <thead className="bg-warning text-center">
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Full Name</th>
                                    <th>Mobile No</th>
                                    <th>Email Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.recordList.map((record , index) => {
                                        return(
                                            <tr key={index} className="text-center">
                                                <td>{record.id}</td>
                                                <td>{record.name}</td>
                                                <td>{record.mobile}</td>
                                                <td>{record.email}</td>
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
export default Axiosdata;
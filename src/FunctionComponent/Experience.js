import React , {useState} from 'react'

const Experience = () => {

    const [userdetails , UserProcess] = useState([{company : "Eunimart" , Role : "Software Developer" , year : "2020"}])
    const [newcompany , processCompany] = useState("")
    const [newrole , processRole] = useState("")
    const [newyear , processYear] = useState("")
    const [msg , processMsg] = useState("")

    const Save = () => {
        let newuser = {
            company : newcompany ,
            Role : newrole ,
            year : newyear
        }
        UserProcess(userdetails => [...userdetails, newuser])
        processCompany("");
        processRole("");
        processYear("");
        processMsg("Experienced Added Successfully")
    }

    const Delete = (index) => {
      userdetails.splice(index ,1)
      UserProcess(userdetails => [...userdetails])
      processMsg("Experience Deleted Successfully")
    }

    return(
        <div className="container mt-5 bg-white">
            
            <div class="row">
                <div className="col-lg-12">
                    <h4 className="text-primary text-center font-weight-bold pt-3">About My Experience</h4>
                </div>
                <div className="col-lg-3">
                    <label>Company Name</label>
                    <input type="text" className="form-control" value={newcompany} onChange = {obj => processCompany(obj.target.value)}/>
                </div>
                <div className="col-lg-3">
                    <label>Role / Designation</label>
                    <input type="text" className="form-control" value={newrole} onChange = {obj => processRole(obj.target.value)}/>
                </div>
                <div className="col-lg-3">
                    <label>Duration in Year</label>
                    <input type="number" className="form-control" value={newyear} onChange = {obj => processYear(obj.target.value)}/>
                </div>
                <div className="col-lg-3 mt-4">
                    <button className="btn btn-md  btn-primary" onClick={Save}>Save Experience</button>
                </div>
                <p className="text-primary text-center p-3">{msg}</p>
                <div className="col-lg-12 mt-1">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="text-primary">
                                <th>Company Name</th>
                                <th>Role / Designation</th>
                                <th>Years</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userdetails.map((user , index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{user.company}</td>
                                            <td>{user.Role}</td>
                                            <td>{user.year}</td>
                                            <td className="mt-0"><button className="btn btn-danger btn-sm rounded-pill" onClick={Delete.bind(this, index)}>Delete</button></td>
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
export default Experience;
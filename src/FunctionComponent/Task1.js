import React, {useState} from 'react'

const Task = () => {
 
    const [mobiles , addMobile] = useState(["9010090363"])
    const [newmobile ,processmobile] = useState("")

    const save = () => {
       addMobile(mobiles => [...mobiles ,newmobile])
       processmobile("")
    }
    const Delete = (index) => {
        mobiles.splice(index,1)
        addMobile(mobiles => [...mobiles])
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Mobile</h1>
                </div>
                <div className="col-lg-5">
                    <input type="number" placeholder="Enter Freiend Mobile No" className="form-control"
                    value={newmobile}
                    onChange = {obj => processmobile(obj.target.value)}
                    />
                    <button className="btn btn-primary btn-sm rounded-pill mt-5" onClick={save}>Add Mobile</button>
                </div>
                <div className="col-lg-7">
                    <table className="table">
                        <thead>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                mobiles.map((mobile ,index) => {
                                   return(
                                    <tr className="" key={index}>
                                    <td>{mobile}</td>
                                    <td><button className="btn btn-sm btn-danger rounded-pill" onClick = {Delete.bind(this,index)}>Delete</button> </td>
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
export default Task;
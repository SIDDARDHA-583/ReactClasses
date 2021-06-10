import React , {Component} from 'react'


class Multidimensional extends Component{

    constructor(){
        super();
        this.state = {
            itemslists : [
                {
                    name : "Apple",
                    price : "200" ,
                    qty : 5
                }
            ],
            newname : '',
            newprice : '',
            newqty : '',
            message : ''
        }
    }

    processName = (obj) => {
        this.setState({
            newname : obj.target.value
        })
    }

    processPrice = (obj) =>{
        this.setState({
            newprice : obj.target.value
        })
    }

    processQty = (obj) => {
        this.setState({
            newqty : obj.target.value
        })
    }

    save = () => {
        let newitem = {
            name : this.state.newname,
            price : this.state.newprice,
            qty : this.state.newqty
        }
        this.setState({
           itemslists : this.state.itemslists.concat(newitem),
           message : this.state.newname + " Added uccessfully",
           newname : "",
           newprice : "",
           newqty : ""
        })
    }

    delete = (index) => {
        this.state.itemslists.splice(index,1);
        this.setState({
            itemslists : this.state.itemslists,
            message : "deleted Successfully"
        })
    }

    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="font-weight-bold text-primary">Products List</h1>
                    </div>
                    <div className="col-lg-3 mt-5">
                        <h4 className="text-primary text-center">Add Items</h4>
                        <div className="bg-success p-3">
                            <div className="mb-3">
                                <label>Item Name</label>
                                <input type="text" className="form-control" onChange={this.processName} value = {this.state.newname} />
                            </div>
                            <div className="mb-3">
                                <label>Price</label>
                                <input type="number" className="form-control" onChange={this.processPrice} value={this.state.newprice}/>
                            </div>
                            <div className="mb-3">
                                <label>Quantity</label>
                                <input type="number" className="form-control" onChange={this.processQty} value={this.state.newqty}/>
                            </div>
                            <button className="btn btn-primary btn-sm rounded-pill" onClick={this.save}>Save Items</button>
                        </div>
                    </div>
                    <div className="col-lg-9 mt-5">
                        <h4 className="text-primary text-center">Available Items</h4>
                        <p className="text-danger text-center">{this.state.message}</p>
                        <table className="table table-bordered">
                            <thead className="bg-warning text-center">
                                <tr>
                                    <th>Item Index</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Item Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.itemslists.map((item , index) => {
                                        return(
                                            <tr key={index} className="text-center">
                                                <td>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                                <td><button className="btn btn-sm btn-danger rounded-pill" onClick={this.delete.bind(this,index)}>Delete</button></td>
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
export default Multidimensional;

import React,{Component} from 'react'

class FetchMulti extends Component{
    constructor(){
        super();
        this.state = {
            itemlist : [],
            citylist : []
        }
      
    }

    getItem = () => {
        fetch("item.json")
        .then(response => response.json())
        .then(result => 
          this.setState({
              itemlist : result
          })    
        )
    }
    
    getCity = () => {
        fetch("city.json")
        .then(response => response.json())
        .then(result =>
            this.setState({
                citylist : result
            }) 
        )
    }


    componentDidMount(){
        this.getItem(); // auto call
        this.getCity(); // auto call
    }

    render(){
       
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-8 text-center mb-4">
                        <h4 className="text-primary">State Management with Fetch Api Mult Dimensional Array</h4>
                        <h6 className= "bg-white p-3">Total Items Are : {this.state.itemlist.length}</h6>
                        <table className="table table-bordered mt-5">
                            <thead className="bg-warning">
                                <tr>
                                    <th>Item Index</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Item Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.itemlist.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        
                    </div>

                    <div className="col-lg-4 text-center mt-5">
                        <h4 className="text-primary"> City List {this.state.citylist.length}</h4>
                        {
                            this.state.citylist.map((city , index) => {
                                return(
                                    <p key={index} className="mt-5">{city}</p>
                                )
                            })
                        }

                    </div>
                    
                </div>
            </div>
        )
    }
}
export default FetchMulti;
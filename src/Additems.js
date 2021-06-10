import React , {Component} from 'react'

class AddItems extends Component{

    constructor(){
        super();
        this.state = {
            itemlists : ["samosa" , "water"],
            newitem : ''
        }
    }
   
    processItem = (obj) => {
         
         this.setState({
             newitem : obj.target.value
         })
    }

    save = () => {
        this.setState({
            itemlists : this.state.itemlists.concat(this.state.newitem)
        })
    }
   

    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>State Management Input & Output On change</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                         <h5 className="text-center">Choose Item</h5>
                         <select className="form-control" onChange={this.processItem}>
                             <option value="">Choose Item</option>
                             <option>Mango</option>
                             <option>Hot Milk</option>
                             <option>Green Tea</option>
                             <option>Banana</option>
                             <option>Grapes</option>
                         </select>
                         <button className="btn btn-primary rounded-pill" onClick={this.save}>Add Item</button>
                    </div>
                    <div className="col-lg-8 text-center">
                         <h5>Your Selected Item</h5>
                         
                         {
                             this.state.itemlists.map((item,index) => {
                                 return(
                                     <p key={index}>{item}</p>
                                 )
                             })
                         }
                    </div>
                </div>
            </div>
        )
    }

}
export default AddItems;
import React , {Component} from 'react'

class Classcomponent extends Component{
  // state in reactjs : it use to  maintain the state of Variable/ array in React
  // How to Create State : this.state
  // How to update the state : this.setState()
  
    constructor(){
        super();
        this.state = {
            counter : 0 , // we are creating a variable  in state - counter = 0
            booklist : ["java" , "node" , "php" ,"angular" ,"html" , "css"]
        }
        
    }

    increase = () => {
        this.setState({
           counter : this.state.counter + 5
        })
    }
    
    decrease = () => {
        this.setState({
            counter : this.state.counter - 5
        })
    }

    addingbook = () => {
        let newbook = prompt("Enter book name");
        this.setState({
            booklist : this.state.booklist.concat(newbook)
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-info">Class Component Example</h2>
                        <h1>{this.state.counter}</h1>
                        <button className="btn btn-primary rounded-pill m-2" onClick={this.increase}>+ The counter by 5</button>
                        <button className="btn btn-warning rounded-pill m-2" onClick={this.decrease}>- The counter by 5</button>
                        <br/><br/>
                        <h4>Book List</h4>
                        <button className="btn btn-success rounded-pill" onClick={this.addingbook}>Add New Book</button>
                        {
                            this.state.booklist.map((book,index) => {
                                return(
                                    <p key={index}>{book}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Classcomponent;
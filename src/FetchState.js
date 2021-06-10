import React , {Component} from 'react'

class FetchState extends Component{

    constructor(){
        super();
        this.state = {
            booklist : []
        }
    }

    getBook = () => {
        fetch("book.json")
        .then(response => response.json())
        .then(result => 
            this.setState(
               {
                booklist : result
               }
            )
        )
    }


    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center mb-4">
                        <h4 className="text-primary">State Management with Fetch Api</h4>
                        <button className="btn btn-primary m-2" onClick={this.getBook}>Show book list</button>
                    </div>
                    {
                        this.state.booklist.map((book, index) => {
                            return(
                                <div className="col-lg-3" key={index}>
                                    <p>{book}</p>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default FetchState;
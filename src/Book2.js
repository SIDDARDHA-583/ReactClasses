import React, {Component} from 'react'

class Book extends Component{
    constructor(){
        super();
        this.state = {
            booklist:[
                {name : "java" ,price : 200 , pic : "1.jpg"},
                {name : "Nodejs" ,price : 200 , pic : "2.jpg"},
                {name : "MongoDB" ,price : 250 , pic : "3.jpg"},
                {name : "ReactJS" ,price : 600 , pic : "4.jpg"},
                {name : "HTML" ,price : 100 , pic : "5.jpg"},
                {name : "CSS3" ,price : 150 , pic : "6.jpg"}
            ]
        }
    }

    render(){
        return(
            <div className="row">
                {
                    this.state.booklist.map((book,index) => {
                        return(
                            <div className="col-lg-4 " key={index}>
                                <div className="p-3 bg-white mb-3">
                                    <h3>{book.name}</h3>
                                    <img src={book.pic} className="img-fluid" alt=""/>
                                    <h6 className="btn btn-sm btn-primary rounded-pill ">{book.price}</h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Book;
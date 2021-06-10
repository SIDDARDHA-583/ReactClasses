import React from 'react'


const book = ["java" , "nodejs" , "php" ,"mysql" , "python" ,"Mongodb"]

const Book = () => {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-info">Available Books : {book.length}</h1>
                    <p>{book[0]} ,{book[1]}</p>
                    {
                        book.map(name => {
                            return(
                                <p>{name}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Book;
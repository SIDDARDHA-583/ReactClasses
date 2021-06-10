import React from 'react'

const items = [
    {
        category : "Book" ,
        products : ["nodejs" ,"php" ,"reactjs" , "javascript" ,"Html"]
    },
    {
        category : "Laptops" ,
        products : ["dell" ,"apple" ,"lenovo" , "acer" ,"hp"]
    },
    {
        category : "TV" ,
        products : ["LG" ,"samsung" ,"TCL" , "sony" ,"mi"]
    }
]

function Service () {
   return(
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1 className="text-primary">This is Service Page</h1>
                <h3>Available Items : {items.length}</h3>
            </div>
            {
                items.map((item,index) => {
                    return(
                        <div className="form-group col-lg-4 mt-5">
                            <h5 className="text-danger text-left font-weight-bold mb-5">{index} . {item.category}</h5>
                            {
                                item.products.map((product, no) =>{
                                    return(
                                        <p className="text-left" key={no}>{no} . {product}</p>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
   )
}
export default Service;
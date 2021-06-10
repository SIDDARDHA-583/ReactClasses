import React from 'react'

const items = [
    {
        
        "name" : "Apple",
        "price" : 200 ,
        "quality" : 10
    },
    {
        
        "name" : "Banana",
        "price" : 100 ,
        "quality" : 8
    },
    {
        
        "name" : "pineApple",
        "price" : 300 ,
        "quality" : 5
    },
    {
        
        "name" : "Grapse",
        "price" : 150 ,
        "quality" : 9
    },
    {
      
        "name" : "Guva",
        "price" : 300 ,
        "quality" : 10
    }
]

const Contact = () =>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary">This is Contact Page</h1>
                    <h1>Available Fruits : {items.length}</h1>
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr className="text-white bg-primary">
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody className="" >
                         {
                             items.map((item ,index) => {
                                 return(
                                     
                                         <tr key={index}>
                                             <td>{index + 1}</td>
                                             <td>{item.name}</td>
                                             <td>{item.price}</td>
                                             <td>{item.quality}</td>
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
export default Contact;
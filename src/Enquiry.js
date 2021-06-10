import React from 'react'

const city = ["Mumbai" , "Pune" , "Chennaie" , "Kolkata" , "Delhi" ,"Bangalore"]

const Enquiry = () => {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-info">Enquiry Form</h1>
                    <p>City List : {city.length}</p>
                </div>
                {
                    city.map((name, index ) => {
                        return(
                           <div className="col-lg-3 text-center" key={index}>
                               <p className="border p-3">{name}</p>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Enquiry;
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {
 
    const [auth,setAuth] = useState(false)

    if(auth){
        return <Redirect to="Calculator" />
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary">This is Home Page</h1>
                    <p>My Home Page is Working</p>
                    <button className="btn btn-primary" onClick={() => setAuth(true)}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
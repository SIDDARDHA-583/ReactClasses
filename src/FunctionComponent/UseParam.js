import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';

function UseParams(){
    const{id} = useParams();
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>useParams() Hooks Example</h2>
                    <h1 className="text-danger">Your Id is: {id}</h1> 
                </div>
            </div>
        </div>
    );
}

export default UseParams;
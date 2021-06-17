import React from 'react'
import { Component } from 'react';

class UserInfo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-lg-4 mb-3">
               <div className="p-3 bg-white">
                 <h5 className="text-primary">{this.props.fullname}</h5>
                 <img src={this.props.pic} alt="user"  className="img-fluid pb-3"/>
                 <p>Mobile No : {this.props.Phone}</p>
                 <p>Age : {this.props.Age}</p>
                 <p>City : {this.props.City}</p>
               </div>
            </div>
        )
    }
}
export default UserInfo;
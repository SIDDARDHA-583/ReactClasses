import React , {Component} from 'react';
import {Link , Switch, Route} from 'react-router-dom';

const Profile = () =>      <h2> View Profile </h2>;
const EditProfile = () =>  <h2> Edit Profile </h2>;
const Conatct = () =>      <h2> My Contact </h2>;
const Experience = () =>   <h2> My Experienced </h2>;
const Project = () =>      <h2> My Project </h2>;
const Education = () =>    <h2> My Education </h2>;

class NestedRouting extends Component{
    render(){
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-3">
                       <ul className="list-group">
                           <li className="list-group-item active"> Navigation </li>
                           <li className="list-group-item"> <Link to="/user">View Profile </Link></li>
                           <li className="list-group-item"> <Link to="/user/edit-profile">Edit Profile </Link></li>
                           <li className="list-group-item"> <Link to="/user/mycontact">My Contact  </Link></li>
                           <li className="list-group-item"> <Link to="/user/myexperience">Experience  </Link></li>
                           <li className="list-group-item"> <Link to="/user/myproject">Project    </Link></li>
                           <li className="list-group-item"> <Link to="/user/myeducation">Education </Link></li>
                       </ul>
                    </div>
                    <div className="col-lg-9">
                        <h4 className="text-primary text-center"> Nested Routing Example </h4>
                        <Switch>
                            <Route exact path="/user" component={Profile}/>
                            <Route exact path="/user/edit-profile" component={EditProfile}/> 
                            <Route exact path="/user/mycontact" component={Conatct}/>
                            <Route exact path="/user/myexperience" component={Experience}/>
                            <Route exact path="/user/myproject" component={Project}/>
                            <Route exact path="/user/myeducation" component={Education}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
export default NestedRouting;
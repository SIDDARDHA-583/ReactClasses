import React , {Component} from 'react'
import {Link , Switch , Route} from 'react-router-dom'

import Mobile from './Mobile'
import Computer from './Computer'
import Book from './Book2'
const Dress = () => <h2>Show Dress Category Items</h2>



class Routing2 extends Component{

    render(){
        return(
            <div className="container mt-4">
               <div className="row">
                   <div className="col-lg-3">
                       <ul className="list-group">
                           <li className="list-group-item active">Shopping Category</li>
                           <li className="list-group-item"><Link to="/shopping/mobile">In Mobile Category</Link></li>
                           <li className="list-group-item"><Link to="/shopping/computer">In Computer Category</Link></li>
                           <li className="list-group-item"><Link to="/shopping/dress">In Dress Category</Link></li>
                           <li className="list-group-item"><Link to="/shopping/book">In Book Category</Link></li>
                       </ul>
                   </div>
                   <div className="col-lg-9">
                       <h4 className="text-info text-center mb-5">Available Products</h4>
                       <Switch>
                           <Route exact path="/shopping/mobile" component={Mobile}/>
                           <Route exact path="/shopping/computer" component={Computer}/>
                           <Route exact path="/shopping/dress" component={Dress}/>
                           <Route exact path="/shopping/book" component={Book}/>
                       </Switch>
                   </div>
               </div>
            </div>
        )
    }
}
export default Routing2;
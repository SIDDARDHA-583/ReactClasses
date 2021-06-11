import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-none p-3">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                       {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/enquiry">Enquiry</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/classcomponent">Classcomponent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">NestedRouter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/state1">State1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/additem">AddItems</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/multi">Multidimensional</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetch">FetchState</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/fetchmulti">FetchMulti</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/shopping">Routing2</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/usestate">UseState</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usestatesingle">useStateSingleArray</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hookthree">HookThree</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/task">Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/usestatemulti">UseStateMulti</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/1998/siddu/useparams">useparams</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/0/useparams2">UseParams2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/axios">Axiosdata</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default Header;
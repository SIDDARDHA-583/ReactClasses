import React from 'react'
import {HashRouter , Route} from 'react-router-dom';
import About from './About'; // import functionname from './filename
import './App.css';
import Service from './Service'
import Contact from './Contact'
import Header from './Header';
import Home from './Home';
import Enquiry from './Enquiry';
import Book from './Book';
import Classcomponent from './Classcomponent';
import NestedRouting from './Nestedrouter';
import State1 from './State1';
import AddItems from './Additems';
import Multidimensional from './Multidimensional';
import Routing2 from './Routing2';
import FetchState from './FetchState';
import FetchMulti from './FetchMulti';
import Axiosdata from './Axiosdata';
import UseStateExample from './FunctionComponent/UseStateExample';
import useStateSingleArray from './FunctionComponent/useStateSingleArray';
import HookThree from './FunctionComponent/Hookthree';
import Task from './FunctionComponent/Task1';
import UseStateMulti from './FunctionComponent/UseStateMulti';
import Experience from './FunctionComponent/Experience';
import UseParams from './FunctionComponent/UseParam';
import UseParams2 from './FunctionComponent/UseParams2';
import UseEffect from './FunctionComponent/UseEffect';
import Product from './FunctionComponent/Props';
import FormValidation from './Validation';
import OnSubmit from './Practise/OnSubmit';
import LoginForm from './Practise/LoginForm';
import Signup from './Practise/Signup';
import Calculator from './Practise/Calculator';
import UseEffectFetch from './Practise/UseEffectFetch';
import UseHistory from './Practise/UseHistory';
import UseContext from './Practise/UseContext';
import Email from './Practise/Email';
import FilterMethod from './Practise/FilterMethod';

//import UserInfo from './FunctionComponent/UserInfo';



function App() {
  return (
   <HashRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/enquiry" component={Enquiry}/>
        <Route exact path="/books"component={Book}/>
        <Route exact path="/classcomponent" component={Classcomponent}/>
        <Route path="/user" component={NestedRouting}/>
        <Route exact path="/state1" component={State1}/>
        <Route exact path="/additem" component={AddItems}/>
        <Route exact path="/multi" component={Multidimensional}/>
        <Route exact path="/fetch" component={FetchState}/>
        <Route exact path="/fetchmulti" component={FetchMulti}/>
        <Route exact path="/axios" component={Axiosdata}/>
        <Route path="/shopping" component={Routing2}/>

        {/**Functional Components */}
        <Route exact path="/usestate" component={UseStateExample} />  
        <Route exact path="/usestatesingle" component={useStateSingleArray} />  
        <Route exact path="/hookthree" component={HookThree} />    
        <Route exact path="/task" component={Task}/>
        <Route exact path="/usestatemulti" component={UseStateMulti} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/:id/:name/useparams" component={UseParams}/> 
        <Route exact path="/:index/useparams2" component={UseParams2}/>
        <Route exact path="/useeffect" component={UseEffect} />
        <Route exact path="/props" component={Product} />
        {/*<Route exact path="/userinfo" component={UserInfo} /> */}
        <Route exact path="/validation" component={FormValidation} />


        {/**Practise Section */}
        <Route exact path="/onsubmit" component={OnSubmit} />
        <Route exact path="/loginform" component={LoginForm} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/useeffectfetch" component={UseEffectFetch} />
        <Route exact path="/usehistory" component={UseHistory} />
        <Route exact path="/usecontext" component={UseContext} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/filter" component={FilterMethod} />
   </HashRouter>
  );
}

export default App;

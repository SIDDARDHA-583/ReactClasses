import React , {Component} from 'react';


class FormValidation extends Component{

    constructor(){
        super();
        this.state={
            inputfield:{},
            fielderror:{},
            message : ''
        }
    }

    processInput = (obj) =>{
        let inputfield = this.state.inputfield;
        inputfield[obj.target.name] = obj.target.value;
        
        this.setState({
            inputfield
        })
    }

    save = (obj) =>{
        obj.preventDefault();
        //console.log(this.state.inputfield)
        let fielderror = this.state.fielderror;
        let inputfield = this.state.inputfield;
        let formStatus = true;

        //Name Verification
        if(! isNaN(inputfield['fullname'])){
            formStatus = false;
            fielderror["nameerror"] = "please Enter your valid name"
        }
        else{
            fielderror['nameerror'] =  "";
        }


        //email verification
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if(! epattern.test(inputfield['emailid'])){
            formStatus = false;
            fielderror["emailerror"] = "please Enter valid your email"
        }
        else{
            fielderror['emailerror'] =  "";
        }

        // mboile verification
        let mpattern = /^[6-9]\d{9}$/; 

        if(! mpattern.test(inputfield['MobileNo'])){
            formStatus = false;
            fielderror["Mobileerror"] = "please Enter your valid 10 digit Mobile Number"
        }
        else{
            fielderror['Mobileerror'] =  "";
        }

        //city Verification
        if(! inputfield['city']){
            formStatus = false;
            fielderror["cityerror"] = "Please select valid city"
        }
        else{
            fielderror['cityerror'] = ""
        }

        //Address Verification
        if((! inputfield['address']) || (inputfield['address'].length < 50) ){
            formStatus = false;
            fielderror["addresserror"] = "Please Enter a Address"
        }
        else{
            fielderror['addresserror'] = ""
        }
         


        let msg = ""
        if(formStatus== true){
            msg = "success : Please wait process ..."
        }else{
            msg = "Fail : Invalid Input..."
        }
        this.setState({
            fielderror,
            message : msg
        })

    }

    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="bg-white p-3">
                            <h3 className="text-center text-primary">Contact Us</h3>
                            <p className="text-warning text-center">{this.state.message}</p>
                            <form onSubmit={this.save}>
                                <div className="mb-3">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" name="fullname" onChange={this.processInput}/>
                                    <i className="text-danger">{this.state.fielderror.nameerror}</i>
                                </div>
                                <div className="mb-3">
                                    <label>e-Mail Id</label>
                                    <input type="text" className="form-control" name="emailid" onChange={this.processInput}/>
                                    <i className="text-danger">{this.state.fielderror.emailerror}</i>
                                </div>
                                <div className="mb-3">
                                    <label>Mobile No</label>
                                    <input type="text" className="form-control" name="MobileNo" onChange={this.processInput}/>
                                    <i className="text-danger">{this.state.fielderror.Mobileerror}</i>
                                </div>
                                <div className="mb-3">
                                    <label>City Name</label>
                                    <select className="form-control" name="city" onChange={this.processInput}>
                                        <option value="">Choose</option>
                                        <option>Pune</option>
                                        <option>Mumbai</option>
                                        <option>Chennai</option>
                                    </select>
                                    <i className="text-danger">{this.state.fielderror.cityerror}</i>
                                </div>
                                <div className="mb-3">
                                    <label>Address</label>
                                    <textarea type="text" className="form-control" name="address" onChange={this.processInput}/>
                                    <i className="text-danger">{this.state.fielderror.addresserror}</i>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default FormValidation;
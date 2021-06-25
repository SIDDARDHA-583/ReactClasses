import React from 'react'
import { useHistory } from 'react-router-dom';

const UseHistory = () => {
    let history = useHistory();
    return(
        <div className="mt-3 container">
            <h3 className="text-center">UseHistory Example</h3>
            <div className="row">
                <button className="btn btn-success btn-sm" onClick={() => history.push("/Calculator")}>Click Me</button>
            </div>
        </div>
    )

}
export default UseHistory;
import React from 'react'
import { UserContext } from './UseContext';

const Componentc = () => {
    return(
        <div className="container">
            <p className="text-center">This is Component c</p>
            <UserContext.Consumer>
                {value => <div className="text-center">{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}
export default Componentc;
import React from 'react'
import Componentc from './Componentc';

export const UserContext = React.createContext();

const UseContext = () => {
    return(
        <div className="container mt-3">
            <h3 className="text-center text-primary font-weight-bold">UseContext Example</h3>
            <UserContext.Provider value={"siddu"}>
            <Componentc />
            </UserContext.Provider>
            
        </div>
    )
}
export default UseContext;
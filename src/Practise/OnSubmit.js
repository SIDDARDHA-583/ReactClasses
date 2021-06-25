import React, {useState} from 'react'

function OnSubmit(){
    const [user , SetUser] = useState({
        username : '',
        password : ''
    })
    const {username , password} = user;
    const onChange = e => {
        SetUser({...user,[e.target.name] : [e.target.value]})
    }
    const submit = e => {
        e.preventDefault();
        console.log(user);
    }
    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" name="username" value={username} onChange={onChange} />
                <input type="password" name="password" value={password} onChange={onChange} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default OnSubmit;
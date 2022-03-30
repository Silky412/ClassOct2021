import { useState } from "react";

function Main(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        <div>
            <span>Email</span><br/>
            <input type='text'onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <span>password</span><br/>
            <input type='password'onChange={(e)=>{setPassword(e.target.value)}}/>
            <h4>Email-id:- {email}</h4>
            <h4>password:- {password}</h4>
        </div>
    )
}
export default Main

// when defining component use PascalCasing
// variable name in camelCasing

// react cannot understand normal variable change
//react can only understand state variable

import { useState } from "react";

function Main(){
    const [count, setCount] = useState(0)
    let a = 0
    const [password, setPassword] = useState('')
    const handleClick = ()=>{
        setCount(count+1) 
    }
    const notice = 'use state when chnaging value dynamically'
    return(
        <div>
            <h1>{notice}</h1>
            <h3 id='divNumberHolder'>{a}</h3>
            <button onClick={()=>{handleClick()}}>click me</button>
        </div>
    )
}
export default Main

// when defining component use PascalCasing
// variable name in camelCasing

// react cannot understand normal variable change
//react can only understand state variable

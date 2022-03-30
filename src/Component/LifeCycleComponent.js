import { useState, useEffect } from "react"

export default function LifeCycleComponent(){
    const [value,setValue] = useState('')
    useEffect(()=>{
        alert('on compoenentDidMount')
        console.log('inside useEffect')
        
    },[])
    //useEffect(callback function, optional(array))
    //useEffect(callback function, [])
    return(
        <div style={{marginTop:'300px'}}>
            <h4>value updated:- {value}</h4>
            <button onClick={()=>{setTimeout(()=>{setValue('welcome to automated react app');console.log('inside settimeout')},4000)}}>click me</button>
        </div>
    )
}

// when component mount ---- when component unmount --- on user action
// componentDidMount ----   componentWillUnmount   --- componentDidUpdate(whenever component refresh)
// useEffect will run the callback function at particular moment on the lifecycle of whole component
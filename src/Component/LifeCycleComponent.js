import { useState, useEffect } from "react"
import abc ,{value as val} from '../commenFunction'

export default function LifeCycleComponent(){
    const [pvalue,setPvalue] = useState(0)
    const [nvalue,setNvalue] = useState(0)
    useEffect(Confirm,[])    

    function Confirm (){
        window.confirm('hello')
        console.log('inside useEffect')
    }
    //useEffect(callback function, optional(array))
    //useEffect(callback function, [])   =>  componentDidMount
    //useEffect(callbackback) ==> when ever there is a change in (anystate)compoent function will run
    return(
        <div style={{marginTop:'300px'}}>
            <h4>value updated:- {pvalue}</h4>
            <button onClick={()=>{setPvalue(pvalue+1)}}>click me</button>
            <h4>value updated:- {nvalue}</h4>
            <button onClick={()=>{setNvalue(nvalue-1)}}>click me</button>
        </div>
    )
}

// when component mount ---- when component unmount --- on user action
// componentDidMount ----   componentWillUnmount   --- componentDidUpdate(whenever component refresh)
// useEffect will run the callback function at particular moment on the lifecycle of whole component

//setTimeout(()=>{setValue('welcome to automated react app');console.log('inside settimeout')},4000)}
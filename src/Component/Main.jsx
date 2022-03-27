import React,{useState} from 'react'
function Main(){

    const [val, setVal] = useState(1)    // state variable   [value, callback function to update the value(updated value of value) ]
    const [name, setName] = useState(100)

    let val1 = 100                       // normal js variable
    const handleClick = ()=>{
        setVal(val+name)
    }
    const handleChange = (e)=>{
        setName(+e.target.value)
    }

    return(
        <div className='containerMain'>
            <button onClick={()=>handleClick()}>click me</button>
            <input type='number' value={name} onChange={(e)=>{handleChange(e)}} />
            <div>State Variable {val}</div>
            <div>JS Variable {val1}</div>
        </div>
    )
}
export default Main 



// synthetic event : these events come from plain old js but rebuild in react
// when we are going to call js function or variable we use {} to call it

// ()=>{handleClick()}    // when we pass parameter
// {handleClick}          // when we dont pass parameter


//pascal casing :-   first letter capital of every word    DeepakSharma
//camel casing :- small letter for first word and all other words have first letter capital    deepakSharma
// the inside the react are not called html tags but jsx 
// class is reserved keyword in js 
//we need to import CSS only for the parent component   once imported we can use same csss for giving classes in the child

// jsx extention canused used to tell its a react componnet


//React cannot detect change in javascript variable
//React can only detect a change in state variable
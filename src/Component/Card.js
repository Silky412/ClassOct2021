import React, { Children } from 'react'
import BooksImage from '../Assets/Images/books.jpg'
function Card(props){
    console.log(props)
    return(
        <div style={{width:'20%', height:'100px',margin:'10px'}}>
            <span><img src={BooksImage}/></span>
            <h2>{props.title}</h2>
            <h4>{props.id}</h4>
            <p>{props.description}</p>
        </div>
    )
}
export default Card


//props:- props are the way to pass data from parent to child and props
// props.childeren :- these are the element we kept inside opening and closing tags of the compoenent inside the parent
// to pass data from child to parent we pass a function as a prop and that function can recieve the value as a parameter of that function
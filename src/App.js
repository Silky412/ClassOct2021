import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import LifeCycleComponent from './Component/LifeCycleComponent'
import Card from './Component/Card'
import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  // one way to handle promise and fetch data
  const callData = ()=>{
    let result
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=>{result=res;console.log(result)}).catch((error)=>{console.log('catch block',error)})
  }
  // second way to handle promise
  const callData2 = async()=>{
    try{
      const result = await axios.get('https://jsonplaceholder.typicode.com/commnts')
      console.log('result part',result)
    }
    catch(err){
      console.log('inside catch', err)
    }
  }
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',height:'100vh',width:'100vw',overflow:'auto'}}>
      <button onClick={callData2}>call data</button>
        {
          data.map((element,index)=>{
            return (
              <React.Fragment key={element.id}>
                {<Card title={element.title} description={element.body} id={element.id}/>}
              </React.Fragment>
            )
          })
        }
    </div>
  );
}

export default App;

// q1 how to share data amoung sibling compoenents

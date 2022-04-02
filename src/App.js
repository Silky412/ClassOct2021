import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import LifeCycleComponent from './Component/LifeCycleComponent'
import Card from './Component/Card'
import { useState } from 'react';

function App() {
  const [subjectName, setSubjectName] = useState('English')
  const handleClick = (value)=>{
    setSubjectName(value)
  }
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',height:'100vh',width:'100vw',overflow:'auto'}}>
      <Card subject='chemistry' description='chemistry is all about the funcdamental particlae of our universe that is atom'/>
      <Card subject='physics' description='physics is all about nature of universe'/>
      <Card subject='history' description='history is all bout information of heritage and culture'/>
      <Card subject='mathematics' description='everything is mathematics even digital data'/>
      <Card subject='geo' description='its all aboyt places'/>
      <Card subject={subjectName} description='its a language' changeName={(value)=>{handleClick(value)}}>
      </Card>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Main from './Component/Main'
import LifeCycleComponent from './Component/LifeCycleComponent'
import Card from './Component/Card'
import React, { useState } from 'react';

const db = [{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
  "userId": 1,
  "id": 4,
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},{
  "userId": 4,
  "id": 36,
  "title": "fuga nam accusamus voluptas reiciendis itaque",
  "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
},
{
  "userId": 4,
  "id": 37,
  "title": "provident vel ut sit ratione est",
  "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
},
{
  "userId": 4,
  "id": 38,
  "title": "explicabo et eos deleniti nostrum ab id repellendus",
  "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
},
{
  "userId": 4,
  "id": 39,
  "title": "eos dolorem iste accusantium est eaque quam",
  "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
}]
function App() {
  const [data, setData] = useState(db)
  return (
    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',height:'100vh',width:'100vw',overflow:'auto'}}>
        {
          data.map((element,index)=>{
            return (
              <React.Fragment key={element.id}>
                <Card title={element.title} description={element.body} id={element.id}/>
              </React.Fragment>
            )
          })
        }
    </div>
  );
}

export default App;

// q1 how to share data amoung sibling compoenents

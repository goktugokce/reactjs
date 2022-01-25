import React, {useState} from 'react';
import Receiver from './components/Receiver';
const App = () => {
  
  const items = [
    {
      id:'1',
      name:'item1'
    },
    {
      id:'2',
      name:'item2'
    },
    {
      id:'3',
      name:'item2'
    },
  ]

  return <div>
    In App.js
    {items.map((el) => {
      return <Receiver id={el.id} name ={el.name}/>
    })}
  </div>;
};

export default App;

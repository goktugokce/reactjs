import React, {useState} from 'react';
import StateHandler from './components/StateHandler';
import Card from './components/Card/Card'
const App = () => {
  
  const [items, setItems] = useState([{
    id:'1',
    name:'item1'
  },
  {
    id:'2',
    name:'item2'
  },
  {
    id:'3',
    name:'item3'
  },])

  return <Card>
    {items.map((el) => {
      return <StateHandler id={el.id} name ={el.name}/>
    })}
  </Card>;
};

export default App;

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

  const [inputValue, setInput] = useState({
    inputText:'',
    inputLegth: 0
  });

  const inputHandler = (event) => {
    setInput((prevState) => {
      return{
      ...prevState,
      inputText: event.target.value}
    })

    /*
    const inputHandler = (event) => {
      setInput({
        ...inputValue,
        inputText : event.target.value
      })
    }
    */
  }

  return <form>
    <div>
      <ul>
        {items.map((el) => {
          return <li>el.name</li>
        })}
      </ul>
    </div>
    <div>
      <input onChange={inputHandler} type="text">Type Here</input>
    </div>
  </form>;
};

export default App;

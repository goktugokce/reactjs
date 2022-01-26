import React, {useState} from 'react';

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
    inputLength: 0
  });

  const inputHandler = (event) => {
    /*setInput((prevState) => {
      return{
      ...prevState,
      inputText: event.target.value}
    });
    */
      setInput({
        ...inputValue,
        inputText : event.target.value
      })
    }

  const submitHandler = (event) => {
    event.preventDefault();
    setInput((prevState) => {
      return{
      ...prevState,
      inputLength: ((event.target.value).toString())}
    })
    console.log(inputValue.inputLength)
    
  }


  return (
    <div>
    <form onSubmit={submitHandler}>
    <div>
      <ul>
        {items.map((el) => {
          return <li>{el.name}</li>
        })}
      </ul>
    </div>
    <div>
      <input onChange={inputHandler} type="text"/>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  </div>
  )
}

export default App;

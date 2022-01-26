import React, {useState} from 'react';

const App = () => {

  const [inputValue, setInput] = useState({
    inputText:'',
  });

  const inputHandler = (event) => {
    setInput({
      ...inputValue,
      inputText : event.target.value
    })
    /*setInput((prevState) => {
      return{
      ...prevState,
      inputText: event.target.value}
    });
    */
    }

  const submitHandler = (event) => {
    event.preventDefault();
    setInput({
      ...inputValue,
      inputText : ''})
    console.log(inputValue);
}


  return (
    <div>
    <form onSubmit={submitHandler}>
      <input onChange={inputHandler} value={inputValue.inputText} type="text"/>
      <button type="submit">Submit</button>
  </form>
  </div>
  )
}

export default App;

import React, {useState} from 'react';
import Card from './Card/Card'
const StateHandler = (props) => {

  const [name, setTitle] = useState(props.name);

  const clickHandler = (event) => {
    setTitle(event.target.value)
  }

  return <Card>
      {name}
      <div><button value="new value" onClick={clickHandler}>Change name</button></div>
  </Card>;
};

export default StateHandler;

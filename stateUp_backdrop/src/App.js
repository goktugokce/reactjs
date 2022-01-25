import React,{useState} from 'react'
import User from './components/User/User'
import List from './components/List/List'
import './App.css'

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name:uName , age:uAge, id:Math.random().toString()}];
    });
  }

  return (
    <div>
      <User onAddUser={addUserHandler}/>
      <List users={usersList}/>
    </div>
  )
}
export default App;

import React, { useState } from 'react'
import Card from '../Card/Card'
import classes from './User.module.css'
import Button from '../Button/Button'
import Error from '../Error/Error'
const User = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] =useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(name.trim().lenth === 0 || age.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid name and age'
            })
            return;
        }

        if(+age < 1){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid age (>0)'
            })
            return;
        }
        props.onAddUser(name, age);
        setName('');
        setAge('');
    };

    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={name} onChange={nameChangeHandler}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default User;

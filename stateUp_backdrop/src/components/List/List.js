import React from 'react'
import Card from '../Card/Card'
import classes from './List.module.css'

const List = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} {user.age} years old.
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default List;

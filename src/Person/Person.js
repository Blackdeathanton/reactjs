import React from 'react'
import './Person.css'

const person = (props) => {
    return(
        <div className="person">
            <p onClick= {props.click}>Hello! My name is {props.name} and my age is {props.age}</p> <br/>
            <input type="text" onChange={props.change} value={props.name} name="name"/>
        </div>
    );
}

export default person;
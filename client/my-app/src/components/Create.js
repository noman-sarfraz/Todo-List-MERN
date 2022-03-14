// import './Home.css';
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
  
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const navigate = useNavigate()

  const addTodo = () => {
    // navigate('/')
    setError(null)
    setIsPending(true)
    
    const todo = {
      name: document.getElementById('myInput').value
    }
    fetch('http://localhost:5000/todos', {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    .then(res => {
      setIsPending(false)
      res.ok ? navigate('/') : setError(null)
    })
    .catch(err => {
      setError(err.message)
      setIsPending(false)
    })
  }

  return (
    <>
      <div id="myDIV" className="header">
        <h2>Add a new Todo item</h2>
        <input type="text" id="myInput" placeholder="Title..."/>
        <button className="addBtn" onClick={addTodo}>Add</button>
      </div>
      <div style={{textAlign: "center"}}>{error && "Error: Could not add todo item. Try again."}</div>
      <div style={{textAlign: "center"}}>{isPending && "Loading..."}</div>
    </>
  );
}

export default Create;
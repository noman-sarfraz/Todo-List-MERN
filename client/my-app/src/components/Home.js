// import './Home.css';
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Home() {
  const [todos, setTodos] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setIsPending(true)
    fetch('http://localhost:5000/todos')
    .then(res => {
      if(!res.ok) {
        setIsPending(false)
        throw new Error("Could not fetch data.")
      }
      return res.json()
    })
    .then(data => {
      setTodos(data)
      setIsPending(false)
    })
    .catch(err => {
      setError("Could not fetch data")
      setIsPending(false)
    })
  },[])

  return (
    <>
      <div id="myDIV" className="header">
        <h2>My TODOs</h2>
      </div>

     <ul id="myUL">
       { isPending && <li>Loading...</li> }
       { error && <li>Error: {error}</li> }
       { todos && todos.map((todo, i) => <li key={i}>{todo.name}</li>) }
       { todos.length !== 0 && <Link to='/create' className="addLink">Add a Todo</Link> }
      </ul>
      
    </>
  );
}

export default Home;

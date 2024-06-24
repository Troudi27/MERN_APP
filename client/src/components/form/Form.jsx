import React from 'react'
import { useState } from "react";
import Axios from "axios";
import "./Form.css"

export default function Form() {

const api = "http://localhost:3001"
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");

const createUser = () => {
    if (name && age && email){
    Axios.post(`${api}/createUser`, {name, age, email })
      .then((res) => res.data)
        // setUsers([...users, res.data]);
  }}

  return (
    <div className="form">
        <input type="text" className="formInput"  placeholder='name' onChange={(e) => setName(e.target.value)}/>
        <input type="number" className="formInput"  placeholder='age' onChange={(e) => setAge(e.target.value)} />
        <input type="text" className="formInput" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={createUser}>Create User</button>
    </div>
  )
}

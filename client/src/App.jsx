import { useState, useEffect } from "react";
import Axios from "axios";

export default function App() {

  const [users,setUsers] = useState([])

  // useEffect(()=>{
  // },[])

  useEffect(()=>{
    Axios.get("http://localhost:3001/users")
    .then(res =>{
     setUsers(res.data)
    })
  },[])

  //  const xx =[
  //   {name:"houssem", age:34, email:"xx@xx.com"},
  //   {name:"amine", age:34, email:"xx@xx.com"},
  //   {name:"mouna", age:34, email:"xx@xx.com"},
  // ]
  return (
    <>
      {users.map((user, index) => (
        <div className="card" key={index}>
          <ul>
            <li>NAME: {user.name}</li>
            <li>AGE: {user.age}</li>
            <li>EMAIL: {user.email}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

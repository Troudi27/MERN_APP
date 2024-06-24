import "./Display.css"
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Display() {

    const api = "http://localhost:3001"
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      Axios.get(`${api}/users`)
        .then((res) => setUsers(res.data))
    }, [users]);

  return (
    <div>

    {users.map((user) => (
      <div className="displayComp">
        <div className="top">
        <div className="left" style={{ fontWeight: "bold" }}>{user.name}</div>

            <div className="right">{user.age}</div>
        </div>
        <div className="bottom">{user.email}</div>
      </div>
    ))}

    </div>
  )
}

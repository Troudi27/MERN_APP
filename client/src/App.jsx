import { useState, useEffect } from "react";
import Axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get("http://localhost:3001/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

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

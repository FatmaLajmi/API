import React, { useEffect, useState } from 'react'
import axios from 'axios'
const UserList = () => {
// declaring states
    const [users,setUsers]=useState([]);
    const [error,setError]=useState(null);

//fetusers function
    const fetchUsers = async ()=>{
        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        }catch (err){
            console.error(err)
            setError(err)
        }
        
    }
    
//useEffect
    useEffect (()=>{
        fetchUsers();
        
    },[]);


//console.log(users)
  return (
    // mapping the users
    <div>{users.map((user) => (
        <div>
            {user.name}
        </div>
      ))}
    </div>
  )
}

export default UserList
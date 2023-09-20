import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';
interface User {
    id: number;
    name: string;
    email:string
  }
  interface Props{
    sortOrder:string;
    sortType:string
  }
const UserTable = async({sortOrder,sortType}:Props) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-cache'})
    let users:Array<User> = await response.json();
    users = sortOrder === "asc" ? sort(users).asc((user:User) => user[sortType === "name"?"name":"email"]):sort(users).desc((user:User) => user[sortType === "name"?"name":"email"]);    
    const currentSortOrder= (!sortOrder || sortOrder ==="desc") ? "asc":"desc"
  return (
    <div>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th><Link href={`?sortOrder=${currentSortOrder}&sortType=name`}>Name</Link></th>
            <th><Link href={`?sortOrder=${currentSortOrder}&sortType=email`}>Email</Link></th>
          </tr>
        </thead>
        <tbody>
        {users.map(val=><tr key={val.id}>
          <td>{val.name}</td><td>{val.email}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable

import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props{
  searchParams:{
    sortType:string;
    sortOrder:string
  }
  
}
const UsersPage = async ({searchParams:{sortOrder,sortType}}:Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href={"/users/new"} className='btn'>New Users</Link>      
      <UserTable sortOrder={sortOrder} sortType={sortType}/>      
    </div>
  )
}

export default UsersPage

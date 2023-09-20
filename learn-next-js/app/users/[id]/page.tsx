import { notFound } from 'next/navigation'
import React from 'react'
interface Props{
    params:{id:number}
}
const UserDetailsPage = ({params:{id}}:Props) => {
  if(id>10) notFound();
  return (
    <div>
      <h1>User ID :: {id}</h1>
    </div>
  )
}

export default UserDetailsPage

'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { ReactNode } from 'react'

const Navigation = () => {    
  const {status,data:session} = useSession();

  let routes:string[][] = [["Home","/"],["User","/users"],["Admin","/admin"],["Product","/products"],["Upload","/upload"]];
  status === "unauthenticated" && routes.push(["Sign In","/api/auth/signin"])
  status === "authenticated" && routes.push([`Hello User!`,"/"])&& routes.push(["Logout","/api/auth/signout"])
  status === "loading" && routes.push([`Loading`,"/"])
  return (
    <nav className='navbar bg-neutral text-neutral-content rounded'>
        <ul>
          {routes.map(([text,url]):ReactNode=>
            <Link key={text} href={url}>
              <li className='p-5 hover:bg-slate-300 hover:text-black hover:rounded'>
                {text}
              </li>
            </Link>
          )}
        </ul>
    </nav>
  )
}

export default Navigation

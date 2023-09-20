'use client'
// import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
// import { AuthProviders } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next'
import { useState } from 'react'
// import lodash from 'lodash'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(()=>import('./components/HeavyComponent'))
// import ninja from '@/public/img/ninja.png'

export default async function Home(){
  // const [isVisible,setVisble] = useState(false)
  // const serverSession = await getServerSession(AuthProviders)
  const users = [{"name":'d'},{"name":'a'},{"name":'c'},{"name":'b'}]
  return (
    <main className='relative h-screen'>
      {/* <Image 
       src="https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_1280.jpg"
       alt="ninja"
       fill
       className='object-cover'
       sizes='((max-width:480px)100vw,(max-width:768px),50vw,(max-width:1200px),50vw,33vw)'
       quality={75}
       priority
      /> */}
      {/* <p>Hello {serverSession?.user?.name}</p> */}
      {/* {isVisible&& <HeavyComponent/>*/}
      <button onClick={async ()=>{
        const lodash = (await import("lodash")).default;
        console.log(lodash.orderBy(users,[name]))
        }}>Load</button> 
      <Link href="/users">user</Link>
      <ProductCard/>
    </main>
  )
}

export const metadata:Metadata = {
  title:"..."
}


export async function generateMetadata():Promise<Metadata> {
  // const product = await fetch('');
  return {
    title:"hey you"
  }
}

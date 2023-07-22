'use client'
import Image from 'next/image'
import styles from './page.module.css'
import About from "@/app/about/page";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Home() {
    const router=useRouter();
    const navigate=(name)=>{
        router.push(name)
    }


  return (
    <main className=''>
     <h2>Basic Routing (Linking and Navigation)</h2>

        <a href="/login">Login </a>
        <br/>
        <br/>

        <Link href='/login'>Login</Link>
        <br/>
        <Link href='/about'>About</Link>
        <br/>
        <button onClick={()=>navigate('/login')}>Go to Login Page</button>
        <br/>
        <button onClick={()=>navigate('/login')}>Go to About Page</button>
    </main>
  )
}

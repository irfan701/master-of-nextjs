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

        <a href="/login">Login with reload</a>
        <br/>

        <Link href='/login'>Login</Link>
        <br/>
        <Link href='/about'>About</Link>
        <br/>
        <Link href='/studentlist'>Student List </Link>
        <br/>
        <button onClick={()=>navigate('/login')}>Go to Login Page</button>
        <button onClick={()=>navigate('/login')}>Go to About Page</button>
    </main>
  )
}

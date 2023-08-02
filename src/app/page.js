'use client'
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h2>Redirect in Next Js</h2>

        <Link href='/home'>go to home page</Link> <br/>
        <Link href='/product'>go to product page</Link> <br/>
        <Link href='/about'>go to about page</Link> <br/>
        <Link href='/users'>go to users page</Link> <br/>
    </main>
  )
}

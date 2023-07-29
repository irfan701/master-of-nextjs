'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main>
     <h2>Fetch Data With Api in client component</h2>

        <Link href='/productlist'>Go to Product List[client]</Link><br/>
        <Link href='/productlistserver'>Go to Product List[server]</Link>


    </main>
  )
}

'use client'
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <h2>Image & Font Optimization, Loading, 404 Page</h2>
        <Link href='/image'>Go to Image Optimization</Link><br/>
        <Link href='/fonts'>Go to Fonts Optimization</Link> <br/>
        {/*<Link href='/loading'>Go to Loading Data</Link> <br/>*/}
        {/*<Link href='/clientwithserver'>404 Page</Link> <br/>*/}
    </main>
  )
}

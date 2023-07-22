"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Layout({ children }) {
    const pathName=usePathname();

    return (
     <div>
         <h2>Common Layout for LOGIN Screen</h2>
         <br/>

         {
             pathName!=='/login/loginteacher'?
                 <ul>
                     <li>
                         <Link href='/login'>Login Main</Link>

                     </li>
                     <li>
                         <Link href='/login/loginstudent'>Login Student</Link>

                     </li>
                     <li>
                         <Link href='/login/loginteacher'>Login Teacher</Link>
                     </li>
                 </ul>:<h5>Conditional Layout</h5>
         }

<h5>{pathName}</h5>
         {children}
     </div>
    )
}
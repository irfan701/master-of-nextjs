import React from 'react';
import Image from "next/image";
import profile from "/public/next.svg"

const Page = () => {
    console.log(profile)
    return (
        <div>
            <h3>Image Optimization In Next</h3>
            <Image src={profile}/>
<hr/>
            <h3>Except Image Optimization In Next</h3>
            <img src={profile.src} width={300} />
<hr/>
            <h3>External SudDomain Image Configuration Process</h3>

            <Image src='https://images.unsplash.com/photo-1592720422486-b3a1ea5e9309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
            width={300}
                   height={300}
            />

        </div>
    );
};

export default Page;
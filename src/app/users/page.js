'use client'
import Script from "next/script";

const Page = () => {
    return (
        <div>

<Script src='/location.js' onLoad={()=>console.log('file loaded')}></Script>
            <h2>Geolocation API</h2>
        </div>
    );
};

export default Page;
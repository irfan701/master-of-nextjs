import React from 'react';
import {Roboto} from "next/font/google"

const roboto=Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
});

const Page = () => {
    return (
        <div>
            <h1>Font Optimization In next </h1>
            <h1 className={roboto.className}>Font With next js Font Features</h1>
        </div>
    );
};

export default Page;
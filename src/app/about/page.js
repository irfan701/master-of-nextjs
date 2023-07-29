
import React from 'react';
import Link from "next/link";
const About = () => {
    return (
        <div>
            <h2>About</h2>

            <a href="/about">About</a>
            <br/>
            <a href="/contact">Contact</a>
            <br/><br/>
            <Link href='/about'>About</Link>
            <br/>
            <Link href='/contact'>Contact</Link>
        </div>
    );
};

export default About;
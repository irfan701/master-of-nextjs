"use client"
import React from 'react';
import Link from "next/link";
const About = () => {
    return (
        <div>
            <h2>About</h2>

            <a href="/about">ABOUT</a>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    );
};

export default About;
import React from 'react';
import Link from "next/link";

const StudentList = () => {
    return (
        <div>
            <h2>Student List(Dynamic Routing)</h2>
            <ul>
                <li>
                    <Link href='/studentlist/1'>Jenny</Link>

                </li>
                <li>
                    <Link href='/studentlist/2'>Bristy</Link>

                </li>
                <li>
                    <Link href='/studentlist/3'>Anika</Link>
                </li>
            </ul>
        </div>
    );
};

export default StudentList;
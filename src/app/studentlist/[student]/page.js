import React from 'react';

const Student = ({params}) => {
    return (
        <div>
            <h3>Student Details</h3>
           <h3>Student ID:{params.student} </h3>
        </div>
    );
};

export default Student;
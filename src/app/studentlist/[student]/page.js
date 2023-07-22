import React from 'react';

const Student = ({params}) => {
    return (
        <div>
            <h3>Student Details</h3>
            {params.student}
        </div>
    );
};

export default Student;
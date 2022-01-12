import React from 'react';

// React.forwardRef -> что бы передавать ref
const MyInp = React.forwardRef((props, ref) => {
    return (
        <input className="myInp" ref={ref} {...props}/>
    );
});

export default MyInp;
import React from 'react';
import classes from "./myButton.module.css";
const MyButton = ({children, ...props}) => { // children - это контент <MyButton disabled > --- Create Posts --- </MyButton>
    return (
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;
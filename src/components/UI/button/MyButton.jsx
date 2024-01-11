import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    const rootClasses = [classes.myBtn];
    if (props.active) {
        rootClasses.push(classes.active);
    }
    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;
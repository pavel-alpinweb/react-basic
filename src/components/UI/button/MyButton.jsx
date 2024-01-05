import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = (props) => {
    return (
        <button className={classes.myBtn}>Создать пост</button>
    );
};

export default MyButton;
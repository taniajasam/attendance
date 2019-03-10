import React from 'react';
import appBgImg from '../../assets/images/attendanceBg.jpg';
import classes from './AppBackground.css';

const appBackground = (props) => (
    <div className={classes.AppBackground}>
        <img src={appBgImg} alt="App Background"></img>
    </div>
);

export default appBackground;
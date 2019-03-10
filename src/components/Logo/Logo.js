import React from 'react';
import AppLogo from '../../assets/images/appLogo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={AppLogo} alt="Hungama"></img>
    </div>
);

export default Logo;
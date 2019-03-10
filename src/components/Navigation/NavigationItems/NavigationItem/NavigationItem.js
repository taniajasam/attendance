import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li>
        <a href="/" className={classes.NavigationItem}>{props.children}</a>
    </li>
);

export default navigationItem;
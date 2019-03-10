import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>
            Attendance
        </NavigationItem>
        <NavigationItem link="/">
            Leaves
        </NavigationItem>
        <NavigationItem link="/">
            Holidays
        </NavigationItem>
    </ul>
);

export default navigationItems;
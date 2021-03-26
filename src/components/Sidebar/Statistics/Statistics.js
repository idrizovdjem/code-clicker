import React from 'react';
import classes from './Statistics.module.css';

const Statistics = (props) => {
    return (
        <div className={classes.Statistics}>
            <span className={classes.HeaderText}>Statistics</span>
            <p className={classes.CodeLines}>Code lines: {props.balance.toFixed(2)}</p>
            <p className={classes.CodeLines}>
                Lines per click: {props.clickValue.toFixed(2)}
            </p>
            <p className={classes.CodeLines}>Code lines per second: {props.linesPerSecond.toFixed(2)} lines/s</p>
            <hr />
        </div>
    );
}

export default Statistics;
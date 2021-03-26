import React from 'react';
import classes from './Sidebar.module.css';

import Statistics from './Statistics/Statistics';
import ButtonsList from './ButtonsList/ButtonsList';

const Sidebar = (props) => {
    return(
        <div className={classes.Sidebar}>
            <Statistics 
                balance={props.balance} 
                linesPerSecond={props.linesPerSecond}
                clickValue={props.clickValue} />
            <ButtonsList 
                balance={props.balance}
                changeBalance={props.changeBalance} />
        </div>
    );
}

export default Sidebar;
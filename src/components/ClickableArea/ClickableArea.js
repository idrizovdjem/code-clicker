import React from 'react';
import classes from './ClickableArea.module.css';
import codeImage from '../../images/code.png';

const ClickableArea = (props) => {
    return (
        <div className={classes.ClickableArea}>
            <div className={classes.Container}>
                <img 
                    src={codeImage} 
                    alt='clickable closing tags'
                    onClick={() => {
                        props.click();
                    }} /> 
            </div>
        </div>
    );
};

export default ClickableArea;
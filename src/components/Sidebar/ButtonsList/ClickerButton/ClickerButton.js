import React, { useEffect, useState } from 'react';
import classes from './ClickerButton.module.css';

const ClickerButton = (props) => {
    let sectionRef = React.createRef();
    const [buyButtonState, setBuyButtonState] = useState(`${classes.Button} ${classes.Disabled}`);
    const [clickerButtonState, setClickerButtonState] = useState(`${classes.ClickerButton}`);

    useEffect(() => {
        if(props.balance < props.price) {
            setBuyButtonState(`${classes.Button} ${classes.Disabled}`);
            setClickerButtonState(`${classes.ClickerButton}`);
        } else {
            setBuyButtonState(`${classes.Button} ${classes.Buy}`);
            setClickerButtonState(`${classes.ClickerButton} ${classes.CanBuy}`);
        }
    }, [props.balance, props.price]);

    const toggleSection = () => {
        const visibility = sectionRef.current.style.display;
        if (visibility === 'none' || !visibility) {
            sectionRef.current.style.display = 'block';
        } else {
            sectionRef.current.style.display = 'none';
        }
    }

    const buyHanlder = async () => {
        if(props.balance < props.price) {
            return;
        }
        await props.click(props.title);
    }

    return (
        <div>
            <div className={clickerButtonState} onClick={toggleSection}>
                <span className={classes.Title}>{props.title}</span>
            </div>
            <div className={classes.Section} ref={sectionRef}>
                <p className={classes.ButtonLabel}>Price: {props.price}</p>
                <p className={classes.ButtonLabel}>Bought: {props.quantity}</p>
                <p className={classes.ButtonLabel}>Clicks per second: {props.clicks}</p>

                <button 
                    className={`${classes.Button} ${classes.Cancel}`}
                    onClick={toggleSection}>Cancel</button>
                <button
                    onClick={buyHanlder}
                    className={buyButtonState}>Buy</button>
            </div>
        </div>
    );
}

export default ClickerButton;
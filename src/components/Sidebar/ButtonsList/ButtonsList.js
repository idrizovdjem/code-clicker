import React, { Component } from 'react';
import classes from './ButtonsList.module.css';

import ClickerButton from './ClickerButton/ClickerButton';

class ButtonsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propArray: [
                {
                    title: 'Faster typing',
                    price: 10,
                    quantity: 0,
                    clicks: 0.2
                },
                {
                    title: 'Copy Paste',
                    price: 50,
                    quantity: 0,
                    clicks: 1
                }
            ]
        }
    }

    buyPropHandler = async (title) => {
        const copiedPropArray = this.state.propArray.slice();
        const propIndex = copiedPropArray.findIndex(p => p.title === title);
        const prop = copiedPropArray[propIndex];
        
        const newBalance = this.props.balance - prop.price;
        this.props.changeBalance(newBalance, prop.clicks);

        prop.price = Math.ceil(prop.price * 1.2);
        prop.quantity++;
        await copiedPropArray.splice(propIndex, 1, prop);
        this.setState({
            propArray: copiedPropArray
        });
    }

    render() {
        const buttonsElements = this.state.propArray.map(button => {
            return (
                <ClickerButton 
                    balance={this.props.balance}
                    key={button.title}
                    title={button.title} 
                    price={button.price} 
                    quantity={button.quantity} 
                    clicks={button.clicks} 
                    click={this.buyPropHandler} />
            );
        });
    
        return (
            <div className={classes.ButtonsList}>
                {buttonsElements}
            </div>
        );
    }
};

export default ButtonsList;
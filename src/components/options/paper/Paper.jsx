import React from 'react';
import { GameContext } from '../../../contexts/GameContext';
import icon from './../../../assets/icon-paper.svg';
import styles from './styles.module.css';

export default function PaperButton (props) {
    const gameContext = React.useContext(GameContext);

    function handleClick () {
        gameContext.setPlayerMove('paper');
    }

    return (
        <div 
            className={styles.option} 
            onClick={handleClick}
            value="paper"

        >
            <div className={styles.imageBox} value="paper">
                <img src={icon} alt="paper icon" value="paper"/>
            </div>
        </div>
    )
};
import React from 'react';
import styles from './styles.module.css';
import { GameContext } from '../../contexts/GameContext';
import PaperButton from '../options/paper/Paper';
import RockButton from '../options/rock/Rock';
import ScissorButton from '../options/scissor/Scissor';

export default function ChooseScreen () {
    const gameContext = React.useContext(GameContext);

    return (
        
        <main className={styles.chooseContainer}>

            
            <div className={styles.firstOptions}>
                <PaperButton />
                <ScissorButton />
            </div>

            <div className={styles.secondOptions}>
                <RockButton />
            </div>

        </main>
    )
};
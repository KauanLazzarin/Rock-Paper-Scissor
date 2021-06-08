import styles from './styles.module.css';
import scissorIcon from './../../assets/icon-scissors.svg';
import paperIcon from './../../assets/icon-paper.svg';
import React from 'react';
import ScissorButton from '../options/scissor/Scissor';
import PaperButton from '../options/paper/Paper';

export default function WinnerScreen () {

    return (

        <main className={styles.screenContainer}>
            <div className={styles.chooses}>
                <ScissorButton />
                <PaperButton />
            </div>

            <div className={styles.smallTexts}>
                <span>YOU PICKED</span>
                <span>COMPUTER PICKED</span>
            </div>

            <div className={styles.winner}>
                <h2>YOU WIN</h2>
                <button>
                    PLAY AGAIN
                </button>
            </div>
            
        </main>
    );
    
};
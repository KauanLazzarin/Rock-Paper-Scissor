import styles from './styles.module.css';
import scissorIcon from './../../assets/icon-scissors.svg';
import paperIcon from './../../assets/icon-paper.svg';
import React from 'react';

export default function WinnerScreen () {
    return (

        <main className={styles.screenContainer}>
            <div className={styles.chooses}>
                <div>
                    <div>
                        <img src={scissorIcon} alt="player choose" />
                        <span>YOU PICKED</span>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={paperIcon} alt="computer choose" />
                        <span>COMPUTER PICKED</span>
                    </div>
                </div>
            </div>

            <div className={styles.winner}>
                <h2>YOU WIN</h2>
                <button>
                    PLAY AGAIN
                </button>
            </div>
            
        </main>
    )
};
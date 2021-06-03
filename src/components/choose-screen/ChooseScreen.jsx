import styles from './styles.module.css';
import rockIcon from './../../assets/icon-rock.svg';
import paperIcon from './../../assets/icon-paper.svg';
import scissorIcon from './../../assets/icon-scissors.svg';

export default function ChooseScreen () {
    return (
        <main className={styles.chooseContainer}>

            <div className={styles.firstOptions}>

                <div className={styles.optionButton}>
                    <img src={paperIcon} alt="paper-icon" />
                </div>

                <div className={styles.optionButton}>
                    <img src={scissorIcon} alt="paper-icon" />
                </div>

            </div>

            <div className={styles.secondOptions}>

                <div className={styles.optionButton}>
                    <img src={rockIcon} alt="paper-icon" />
                </div>

            </div>

        </main>
    )
};
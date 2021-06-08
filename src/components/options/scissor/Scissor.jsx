import icon from './../../../assets/icon-scissors.svg';
import styles from './styles.module.css';

export default function ScissorButton () {
    return (
        <div className={styles.option}>
            <div className={styles.imageBox}>
                <img src={icon} alt="rock icon" />
            </div>
        </div>
    )
};
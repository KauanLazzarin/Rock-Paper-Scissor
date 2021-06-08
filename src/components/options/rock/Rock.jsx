import icon from './../../../assets/icon-rock.svg';
import styles from './styles.module.css';

export default function RockButton () {
    return (
        <div className={styles.option}>
            <div className={styles.imageBox}>
                <img src={icon} alt="rock icon" />
            </div>
        </div>
    )
};
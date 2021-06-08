import icon from './../../../assets/icon-paper.svg';
import styles from './styles.module.css';

export default function PaperButton () {
    return (
        <div className={styles.option}>
            <div className={styles.imageBox}>
                <img src={icon} alt="paper icon" />
            </div>
        </div>
    )
};
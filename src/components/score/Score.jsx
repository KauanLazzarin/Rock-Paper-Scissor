import styles from './styles.module.css';
import logo from './../../assets/logo.svg';

export default function Score () {
    return (
        <header className={styles.scoreContainer}>
            <img src={logo} alt="logo" />

            <div>
                <span>S C O R E</span>
                <strong>12</strong>
            </div>
        </header>
    )
};
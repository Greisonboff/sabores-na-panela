import styles from "./Footer.module.scss";
import  logo from "assets/logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img width={100} src={logo} alt="Logo" />
        </footer>
    );
}
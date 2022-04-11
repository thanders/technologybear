// Import the link props
import Link from 'next/link';
import HorizontalNav from '../HorizontalNav/HorizontalNav';
import styles from './styles.module.scss';

function Header() {

    const logo = (
        <Link href="/">
            <a className={styles.link}>PLACEHOLDER LOGO</a>
        </Link>
    );

    return (
        <header id='header' className={styles.header}>
            <HorizontalNav logo={logo} />
        </header>
    )
}

export default Header;
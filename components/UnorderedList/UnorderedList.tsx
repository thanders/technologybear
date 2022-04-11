import styles from './unorderedList.module.css';

type Props = {
    children: React.ReactNode;
    show: boolean,
}

function UnorderedList({children, show}: Props) {
    if(show) {
        return (
            <ul className={styles.navUL}>
                {children}
            </ul>
        );
    }
    return null;
}

export default UnorderedList;
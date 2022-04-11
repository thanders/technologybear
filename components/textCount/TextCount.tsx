import React from "react";
import styles from './collapsable.module.scss';

type TextCountProps = {
    count: string,
    text: string,
};

export default function TextCount({count, text}: TextCountProps): any {

    return (
        <div className={styles.secondaryText}>
            <div className={styles.count}>
                {count}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
};
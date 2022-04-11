import React from "react"
import styles from './externalLink.module.scss';
import { linkData } from './linkData';

type Props = {
    postID: string,
    linkID: string,
}

export default function ExternalLink(props: Props): React.ReactNode {
    return (
    <a
        href={linkData[props.postID][props.linkID].href}
        target="_blank"
        rel="noreferrer"
        className={styles.linkText}
    >
        {linkData[props.postID][props.linkID].title}
    </a>
    );
}
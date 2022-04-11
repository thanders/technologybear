import React from "react";
import styles from './styles.module.css';
import GetPostCrumb from '../NextBreadcrumbs/GetPostCrumb';

type Props = {
    children: React.ReactNode;
    title: string,
    description: string,
}

const ArticleLayout: React.FC<Props> = ({title, description, children}: Props) => {

    return (
        <div>
            <GetPostCrumb />
            <div className={styles.container}>
            <div className="prose min-w-full">
                <h2 className={styles.title}>
                    {title}
                </h2>
                {description}
                <article>
                    {children}
                </article>
            </div>
            </div>
        </div>
    )
};

export default ArticleLayout;
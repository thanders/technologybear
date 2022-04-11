import styles from './Layout.module.scss';
import Header from '../Header/Header';
import {MDXProvider} from '@mdx-js/react';
import ExternalLink from '../ExternalLink/ExternalLink';
import ImageNext from '../ImageNext/ImageNext';
import React from 'react';
import Footer from '../Footer/Footer';
import Collapsable from '../Collapsable/Collapsable';
import CollapsableContainer from '../collapsableContainer/CollapsableContainer';

type Props = {
    children: React.ReactNode;
}

export const components: {[id: string]: any} = {
    ExternalLink,
    ImageNext,
    Collapsable,
    CollapsableContainer
}

const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <div id='root'> 
            <main className={styles.root}>
                <Header />
                <div className={styles.layoutRoot}>
                <MDXProvider components={components}>
                    {children}
                </MDXProvider>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
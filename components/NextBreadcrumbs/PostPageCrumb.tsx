import React from 'react';
import Crumb from '../Crumb/Crumb';
import css from './styles.module.scss';

const GetPostCrumb: React.FC = () => {

    const crumbs = {
        posts: {
          text: 'Posts',
          href: '/posts',
          last: false,
        },
        home: {
          text: 'Home',
          href: '/',
          last: false,
        }
    };
    return (
        <div id='breadCrumbs' className={css.crumbs}>
            <Crumb crumb={crumbs.home} />
            <div className={css.separator}>\</div>
            <Crumb crumb={crumbs.posts} />
        </div>
    );
}

export default GetPostCrumb;
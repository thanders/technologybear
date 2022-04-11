import React from 'react';
import {withRouter, Router} from 'next/router';
import Crumb from '../Crumb/Crumb';
import css from './styles.module.scss';

interface Props {
    router: Router,
}

const GetPostCrumb: React.FC<Props> = ({router}: Props) => {
    let slugText: string = '';
    if( typeof router.query.slug === 'string') slugText = router.query.slug;

    const crumbs = {
        current: {
          text: slugText,
          href: '',
          last: true,
        },
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
            <div className={css.separator}>\</div>
            <Crumb crumb={crumbs.current} />
        </div>
    );
}

export default withRouter(GetPostCrumb);
import type { NextPage, GetStaticProps } from 'next';
import { getAllPosts } from "../../utils/mdxUtils";
import PostPageCrumb from '../../components/NextBreadcrumbs/PostPageCrumb';
import { Post } from "../../types/post";
import React from 'react';
import PostsGrid from '../../containers/PostsGrid/PostsGrid';
import styles from './posts.module.scss';
import HeadStandard from '../../components/HeadStandard/HeadStandard';

// props type
type Props = {
    posts: [Post]
}

function PostIndex ({ posts }: Props) {

    const headData = {
        title: 'Posts',
        description: 'All TechnologyBear posts',
        keywords: 'TechnologyBear, Posts, software engineering'
      };
    
    return (
        <>
        <HeadStandard genericData={headData} />
        <PostPageCrumb />
        <div className={styles.container}>
            <p>
                The list below contains all of the TechnologyBear posts
            </p> 
            <PostsGrid posts={posts}/>
        </div>
        </>
        )
}
export default PostIndex;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts([
      'title',
      'slug',
      'date',
      'description',
      'thumbnail',
      'headData',
      'category'
    ]);
  
    // retunr the posts props
    return { props: { posts } }
  }

import React from 'react';
import Head from "next/head";
import { Post } from '../../types/post';

  type Props = {
      frontMatter?: Omit<Post, 'slug'>,
      genericData?: {
          title: string,
          description: string,
          keywords: string,
      }
  }
  
  export default function HeadStandard({frontMatter, genericData}: Props) {

    if(frontMatter) {
        return (
            <Head>
                <title>{frontMatter.title}</title>
                <link rel='canonical' href={frontMatter.headData.pageURL} />
                <meta name="description" content={frontMatter.description}></meta>
                <meta name="keywords" content={frontMatter.headData.keywords}></meta>

                <meta property="og:title" content={frontMatter.title} />
                <meta property="og:description" content={frontMatter.description}/>
                <meta property="og:url" content={frontMatter.headData.pageURL} />
                <meta property="og:image" itemProp="image" content={frontMatter.headData.image} />
                <meta property="og:type" content={frontMatter.headData.type} />
                <meta property="og:updated_time" content={frontMatter.headData.datetime} />
                <meta name="twitter:card" content="summary" />
                <meta property="fb:app_id" content="your fb app id" />

                <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type"></meta>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
            </Head>
        );
    }
    if(genericData) {
        return(
                <Head>
                    <title>{genericData.title}</title>
                    <meta name="description" content={genericData.description}></meta>
                    <meta name="keywords" content={genericData.keywords}></meta>
                    <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type"></meta>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
                </Head>
        )
    }
    return null;
  }
import React from "react";
import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { useMdxComponentsContext } from '../../context/mdxContext';
import { Post } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
import Stacks from '../../components/Stacks';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import { stepData, toolsData, questionData } from '../../structuredData/structuredData';
import HeadStandard from "../../components/HeadStandard/HeadStandard";

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<Post, 'slug'>;
}

// components to render
const components = {
    Prerequisites,
    Stacks,
}

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {

    // get setters
    const { setPrerequisites, setStacks } = useMdxComponentsContext();

    useEffect(() => {
        // set prerequisites
        setPrerequisites(frontMatter.prerequisites);
        // set stacks
        setStacks(frontMatter.stacks);
    }, [
        setPrerequisites,
        setStacks,
        frontMatter.prerequisites,
        frontMatter.stacks
    ]);

    function getStructuredDataSchema(frontMatterData: Omit<Post, "slug">) {
        let data = null;
        if(frontMatter.structuredDataType === 'step') {
            data = {
            "@context": "https://schema.org/", 
            "@type": "HowTo", 
            "name": frontMatter.structuredDataTypeTitle,
            "image": frontMatterData.headData.image,
            "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "USD",
                "value": "0"
            },
            "tool": toolsData[frontMatter.structuredDataID],
            "step": stepData[frontMatter.structuredDataID],
            "totalTime": "PT20M"
            }
        }
        if(frontMatter.structuredDataType === 'FAQPage') {
            data = {
                "@context": "https://schema.org/", 
                "mainEntity": questionData[frontMatter.structuredDataID]
            }
        }
        return data;

    }

    const schemaData: any = getStructuredDataSchema(frontMatter);

    const structuredData = schemaData ?
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
    />
    : null;

    if(frontMatter.includeStructuredData) {
        return(
            <>
                <HeadStandard frontMatter={frontMatter} />
                <ArticleLayout
                    title={frontMatter.title}
                    description={frontMatter.description}
                >
                    <MDXRemote components={components} {...source} />
                </ArticleLayout>
                {structuredData}
            </>
        );
    }
    if(!frontMatter.includeStructuredData) {
        return(
            <>
                <HeadStandard frontMatter={frontMatter} />
                <ArticleLayout
                    title={frontMatter.title}
                    description={frontMatter.description}
                >
                    <MDXRemote components={components} {...source} />
                </ArticleLayout>
            </>
        );
    }

    return (null);
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    // get the slug
    const { content, data } = getPost(slug);
    // serialize the data on the server side
    const mdxSource = await serialize(content, { scope: data });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    //only get the slug from posts
    const contentToFetch = ['slug'];
    const posts = getAllPosts(contentToFetch);

    // map through to return post paths
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}
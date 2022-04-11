import React, {useState, useRef } from "react"
import styles from './collapsable.module.scss';
import Collapsable from '../Collapsable/Collapsable';
import TextCount from '../textCount/TextCount';
import Link from 'next/link';

type TBMultiCollapsableProps = {
    post: string,
    topic: string,
};

type dataStringType = {
    [post: string]: {
        [topic: string]: {
            [primary: string] : string
        }
    },
};

type dataStringElement = {
    [post: string]: {
        [topic: string]: {
            [secondary: string] : JSX.Element
        }
    },
};

const dataString: dataStringType = {
   awsCCP: {
        cloudConcepts: {
            primary: 'Domain 1: Cloud Concepts'
        },
        securityCompliance: {
            primary: 'Domain 2: Security and Compliance',
        },
        technology: {
            primary: 'Domain 3: Technology',
        },
        billingPricing: {
            primary: 'Domain 4: Billing and Pricing',
        }
    }
};

const dataElement: dataStringElement = {
    awsCCP: {
        cloudConcepts: {
            secondary: (
                <ul className={styles.secondaryList}>
                    <li>
                        <Link style={{ cursor: 'pointer'}} href="/posts/aws-cloud-value-proposition">
                            <a>
                                <TextCount count='1.1' text='Define the AWS Cloud and its value proposition' />
                            </a>
                        </Link>
                    </li>
                    
                    <li>
                        <Link style={{ cursor: 'pointer'}} href="/posts/aws-cloud-economics">
                            <a>
                                <TextCount count='1.2' text='Identify aspects of AWS Cloud economics' />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ cursor: 'pointer'}} href="/posts/aws-architecture-design-principles">
                            <a>
                                <TextCount count='1.3' text='Explain the different cloud architecture design principles' />
                            </a>
                        </Link>
                    </li>
                </ul>
            )
        },
        securityCompliance: {
            secondary: (
                <ul className={styles.secondaryList}>
                    <li>
                        <TextCount count='2.1' text='Define the AWS shared responsibility model'/>
                    </li>
                    <li>
                        <TextCount count='2.2' text='Define AWS Cloud security and compliance concepts'/>
                    </li>
                    <li>
                        <TextCount count='2.3' text='Identify AWS access management capabilities'/>
                    </li>
                    <li>
                        <TextCount count='2.4' text='Identify resources for security support'/>
                    </li>
                </ul>
            ),
        },
        technology: {
            secondary: (
                <ul className={styles.secondaryList}>
                    <li>
                        <TextCount count='3.1' text='Define methods of deploying and operating in the AWS Cloud' />
                    </li>
                    <li>
                        <TextCount count='3.2' text='Define the AWS global infrastructure' />
                    </li>
                    <li>
                        <TextCount count='3.3' text='Identify the core AWS services' />
                    </li>
                    <li>
                        <TextCount count='3.4' text='Identify resources for technology support' />
                    </li>
                </ul>
            )
        },
        billingPricing: {
            secondary: (
                <ul className={styles.secondaryList}>
                    <li>
                        <TextCount count='4.1' text='Compare and contrast the various pricing models for AWS (for example, On-Demand Instances, Reserved Instances, and Spot Instance pricing)' />
                    </li>
                    <li>
                        <TextCount count='4.2' text='Recognize the various account structures in relation to AWS billing and pricing' />
                    </li>
                    <li>
                        <TextCount count='4.3' text='Identify resources available for billing support' />
                    </li>
                </ul>
            )
        },
    }
}

export default function TBMultiCollapsable({post, topic}: TBMultiCollapsableProps): any {

    return (
        <Collapsable primary={dataString[post][topic].primary}>
            {dataElement[post][topic].secondary}
        </Collapsable>
    );
};
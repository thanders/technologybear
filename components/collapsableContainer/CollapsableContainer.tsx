import React, {useState, useRef } from "react"
import styles from './collapsable.module.scss';
import TBMultiCollapsable from '../tbMultiCollapsable/TBMultiCollapsable';

export default function CollapsableContainer(): any {

    return (
        <div className={styles.container}>
            <TBMultiCollapsable post='awsCCP' topic='cloudConcepts' />
            <TBMultiCollapsable post='awsCCP' topic='securityCompliance' />
            <TBMultiCollapsable post='awsCCP' topic='technology' />
            <TBMultiCollapsable post='awsCCP' topic='billingPricing' />
        </div>
    );
};
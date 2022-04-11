import React from 'react';
import styles from './heroImage.module.scss';


  export default function HeroImage() {

    return(
        <div className={styles.container}>
            <div className={styles.heroImage}>Technology Bear</div>
        </div>)
  }
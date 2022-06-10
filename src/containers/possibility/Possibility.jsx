import React from 'react';
import styles from './possibility.module.scss';
import possibilityImg from '../../assets/images/possibility.png';

export const Possibility = () => {
  return (
    <div className={`${styles.possibility} section__padding`} id='possibility'>
      <div className={styles.image}>
        <img src={possibilityImg} alt='possibility' />
      </div>
      <div className={styles.content}>
        <span>Request Early Access to Get Started</span>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

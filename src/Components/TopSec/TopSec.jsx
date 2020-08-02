import React from 'react';
import styles from './TopSec.module.css';
import covid from '../assets/covid.jpg';

export const TopSec = () => {
    return (
        <div className={styles.parent}>
            <img className={styles.image} alt="" src={covid} />
            
        </div>
    )
}

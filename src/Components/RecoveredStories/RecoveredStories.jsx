import React from 'react';
import styles from './RecoveredStories.module.css';
import { Quote } from './Quote';

export const RecoveredStories = () => {
    return (
        <div className={styles.container}>
            <h1>Recovered Stories</h1>
            <Quote />
        </div>
    )
}
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item} style={{ backgroundColor: generateRandomColor() }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

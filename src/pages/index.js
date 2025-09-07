// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="root0zaki" description="My Portfolio Website">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Welcome to root0zaki</h1>
          <p className="hero__subtitle">My Portfolio Website</p>
        </div>
      </header>
    </Layout>
  );
}

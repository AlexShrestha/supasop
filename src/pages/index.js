// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SupaSop</title>
        <meta name="description" content="Welcome to SupaSop - Your go-to solution for efficient business operations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>SupaSop</span>
        </h1>

        <p className={styles.description}>
          Your go-to solution for efficient business operations.
        </p>

        <div className={styles.grid}>
          <a href="#features" className={styles.card}>
            <h3>Features &rarr;</h3>
            <p>Discover what SupaSop can do for you.</p>
          </a>

          <a href="#pricing" className={styles.card}>
            <h3>Pricing &rarr;</h3>
            <p>Find the plan that fits your needs.</p>
          </a>

          <a href="#contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Get in touch with our team.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 SupaSop. All rights reserved.</p>
      </footer>
    </div>
  );
}

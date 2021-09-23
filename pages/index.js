import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Order Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Order Online
        </h1>

      

      </main>

      <footer className={styles.footer}>
      
          Powered by{' '}
          <span className={styles.logo}>
            Sunny Saha
          </span>
      </footer>
    </div>
  )
}

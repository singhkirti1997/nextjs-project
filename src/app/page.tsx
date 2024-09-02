
import Link from 'next/link';
import styles from './styles.module.css'
export default function Home() {

  return (
    <div className={styles.container}> 
      <h1 className={styles.heading}>Home Screen</h1>

        {/* <ul className={styles.dashboard}>
            <div className={styles.textView}>
            <Link className={styles.textStyle} href="/form">Go to Form</Link>
            </div>
            <div className={styles.textView}>
            <Link className={styles.textStyle} href="/about">About Page</Link>
            </div>
            <div className={styles.textView}>
            <Link className={styles.textStyle} href="/contact">Contact Page</Link>
            </div>
        </ul> */}
        <div className={styles.container}>
      <h1>Home Screen</h1>
      <nav className={styles.nav}>
        <Link href="/form">Go to Form</Link>
        <Link href="/about">About Page</Link>
        <Link href="/contact">Contact Page</Link>
      </nav>
    </div>
    </div>
  );
}

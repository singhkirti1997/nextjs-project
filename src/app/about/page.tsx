// // pages/about.js

// import Link from 'next/link';
import styles from './styles.module.css'

// export default function About() {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is the about page.</p>
//       <nav>
//         <ul>
//           <li>
//             <Link className={styles.dashboard} href="/">Back to Home</Link>
//           </li>
//           <li>
//             <Link href="/form">Go to Form</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact Page</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Page</h1>
      <p>This is an example Next.js website.</p>
    </div>
  );
}

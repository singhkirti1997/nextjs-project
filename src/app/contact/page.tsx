// pages/contact.js
"use client"; // Add this line at the top

import Link from 'next/link';
import styles from './styles.module.css'

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Back to Home</Link>
          </li>
          <li>
            <Link href="/form">Go to Form</Link>
          </li>
          <li>
            <Link href="/about">About Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

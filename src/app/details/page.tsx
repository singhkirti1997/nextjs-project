import { useEffect, useState } from 'react';
import styles from './styles.module.css'

export default function Details() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>User Details</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className={styles.list}>
          {users.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Message:</strong> {user.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

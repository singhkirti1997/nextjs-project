// // pages/form.js
"use client"; // Add this line at the top

// import { useState } from 'react';
// import TextInputForm from '../../components/TextInput';
// import Link from 'next/link';

import styles from './styles.module.css'

// export default function Form() {
//   const [fName, setFname] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Submitted value: ${fName}`);
//     // You can also send this value to a backend API here
//   };
//   return (
//     <div>
//       <h1>Form Screen</h1>
//       <form onSubmit={handleSubmit}>
//       <TextInputForm
//       lable={'Enter First Name:'} 
//       value={fName} 
//       onChange={(e)=>setFname(e)}
//       />
//       <TextInputForm
//       lable={'Enter Last Name:'} 
//       value={fName} 
//       onChange={(e)=>setFname(e)}
//       />
//       <TextInputForm
//       lable={'Enter Email:'} 
//       value={fName} 
//       onChange={(e)=>setFname(e)}
//       />
//       <TextInputForm
//       lable={'Enter Contact:'} 
//       value={fName} 
//       onChange={(e)=>setFname(e)}
//       />
//        <button type="submit">Submit</button>
//       </form>
//       <nav>
//         <ul>
//           <li>
//             <Link href="/">Back to Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About Page</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact Page</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/pages/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Data added successfully!");
        setFormData({ name: "", email: "" }); // Reset the form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          className={styles.inputText}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Data</button>
    </form>
  );
}

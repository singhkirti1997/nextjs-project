// components/TextInputForm.js
"use client"; // Add this line at the top

import { useState } from 'react';
import styles from './styles.module.css'

const TextInputForm = ({lable, value,onChange}) => {
  return (
    <div className={styles.inputView}>
      <label htmlFor="textInput">{lable}</label>
      <input
        type="text"
        id="textInput"
        value={value}
        onChange={onChange}
        required
      />
     
    </div>
  );
};

export default TextInputForm;

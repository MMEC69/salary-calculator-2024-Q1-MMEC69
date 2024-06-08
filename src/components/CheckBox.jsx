import React from 'react';
import styles from "../component_css/checkbox.module.css";

export function CheckBox(props) {
    const {
        onChange,
        title,
        name3
    } = props;
  return (
    <div className={styles.checkBox}>
        <input 
            type='checkbox'
            onChange={onChange}
            value = {true}
            name = {name3}
        /><p>{title}</p>
    </div>
  );
}

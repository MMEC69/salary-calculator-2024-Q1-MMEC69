import React, { useContext, useState } from 'react';
import {Close} from "./Buttons";
import {CheckBox} from "./CheckBox";
import styles from "../component_css/inputFields.module.css"
import { GlobalContext } from '../context/global_context';
export function InputField1(props) {
    const {
        type,
        value,
        placeholder,
        onChange,
        name
    } = props;
  return (
    <div className={styles.inputField1}>
        <input 
            type={type}
            value={value}
            name = {name}
            placeholder={placeholder}
            onChange={onChange} 
        />
    </div>
  );
}

export function InputField2(props) {
  const {
      type,
      value,
      placeholder,
      onChange,
      name
  } = props;
  return (
    <div className={styles.inputField2}>
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            name = {name}
        />
    </div>
  );
}

export function InputField3(props) {
  const {
      type,
      value,
      placeholder,
      onChange
  } = props;
return (
  <div className={styles.inputField3}>
      <input 
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange} 
      />
  </div>
);
}


export function EarningsInput(props) {
  const {
      type1,
      type2,
      value1,
      value2,
      placeholder1,
      placeholder2,
      onChange1,
      onChange2,
      onChange3,
      onChange4,
      name1,
      name2,
      name3,
      titleCheckBox,
      index
  } = props;
  return (
    <div className={styles.earningsInput}>
      <InputField1
          type = {type1}
          value = {value1}
          name = {name1}
          placeholder = {placeholder1}
          onChange = {onChange1}
      />
      <InputField2
          type = {type2}
          value = {value2}
          name = {name2}
          placeholder = {placeholder2}
          onChange = {onChange2}
      />
      <div className={styles.buttonOptions}>
        <Close
          onChange = {onChange3}
          index = {index}
        />
        <CheckBox
          onChange = {onChange4}
          title = {titleCheckBox}
          name3 = {name3}
        />
      </div>
      
    </div>
  );
}

export function DeductionsInput(props) {
  const {
      type1,
      type2,
      value1,
      value2,
      name1,
      name2,
      placeholder1,
      placeholder2,
      onChange1,
      onChange2,
      onChange3,
      index
  } = props;
  return (
    <div className={styles.deductionInput}>
      <InputField1
          type = {type1}
          value = {value1}
          placeholder = {placeholder1}
          onChange = {onChange1}
          name = {name1}
      />
      <InputField2
          type = {type2}
          value = {value2}
          placeholder = {placeholder2}
          onChange = {onChange2}
          name = {name2}
      />
      <Close
        onChange = {onChange3}
        index = {index}
      />
    </div>
  );
}


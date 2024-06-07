import React from 'react';
import {Close} from "./Buttons";
import {CheckBox} from "./CheckBox";
import styles from "../component_css/inputFields.module.css"

export function InputField1(props) {
    const {
        type,
        value,
        placeholder,
        onChange
    } = props;
  return (
    <div className={styles.inputField1}>
        <input 
            type={type}
            value={value}
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
      onChange
  } = props;
  return (
    <div className={styles.inputField2}>
        <input 
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange} 
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
      titleCheckBox
  } = props;
  return (
    <div className={styles.earningsInput}>
      <InputField1
          type = {type1}
          value = {value1}
          placeholder = {placeholder1}
          onChange = {onChange1}
      />
      <InputField2
          type = {type2}
          value = {value2}
          placeholder = {placeholder2}
          onChange = {onChange2}
      />
      <div className={styles.buttonOptions}>
        <Close
          onChange = {onChange3}
        />
        <CheckBox
          onChange = {onChange4}
          title = {titleCheckBox}
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
      placeholder1,
      placeholder2,
      onChange1,
      onChange2,
      onChange3,
  } = props;
  return (
    <div className={styles.deductionInput}>
      <InputField1
          type = {type1}
          value = {value1}
          placeholder = {placeholder1}
          onChange = {onChange1}
      />
      <InputField2
          type = {type2}
          value = {value2}
          placeholder = {placeholder2}
          onChange = {onChange2}
      />
      <Close
        onChange = {onChange3}
      />
    </div>
  );
}


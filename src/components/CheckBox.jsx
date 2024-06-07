import React from 'react';

export function CheckBox(props) {
    const {
        onChange
    } = props;
  return (
    <div>
        <input 
            type='checkbox'
            onChange={onChange}
        />
    </div>
  );
}

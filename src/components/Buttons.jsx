import React from 'react'

export function Reset(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div>
        <button
            onClick={onClick}
        >
            Reset
        </button>
    </div>
  );
}

export function AddingButton(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div>
        <button
            onClick={onClick}
        >
            {title}
        </button>
    </div>
  );
}

export function Close(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div>
        <button
            onClick={onClick}
        >
            Close
        </button>
    </div>
  );
}



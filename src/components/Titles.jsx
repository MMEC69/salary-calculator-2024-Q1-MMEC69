import React from 'react';

export function MainTitle(props) {
    const {
        title
    } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export function SubTitle(props) {
    const {
        title
    } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export function DescriptiveTitle(props) {
    const {
        title
    } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export function ContentText(props) {
    const {
        title
    } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export function Label(props) {
    const {
        title,
        name
    } = props;

    return (
        <div>
            <label htmlFor = {name}>{title}</label>
        </div>
    );
}


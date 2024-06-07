import React from 'react';
import styles from "../component_css/titles.module.css";

export function MainTitle(props) {
    const {
        title
    } = props;

    return (
        <div className={styles.mainTitle}>
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
            <p>{title}</p>
        </div>
    );
}

export function DescriptiveTitle(props) {
    const {
        title
    } = props;

    return (
        <div className={styles.descriptiveTitle}>
            <h1>{title}</h1>
        </div>
    );
}

export function ContentText(props) {
    const {
        title
    } = props;

    return (
        <div className={styles.contentText}>
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
        <div className={styles.fieldLabel}>
            <label htmlFor = {name}>{title}</label>
        </div>
    );
}


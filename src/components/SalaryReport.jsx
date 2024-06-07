import React from 'react';
import {DescriptiveTitle, MainTitle, ContentText, Label} from "./Titles";
import styles from "../component_css/layout.module.css";

export function SalaryReport(props) {
    const {
        basicSalary,
        grossEarning,
        grossDeduction,
        emplyeeEPF,
        APIT,
        netSalary,
        employeerEPF,
        employeerETF,
        CTC
    } = props;
    return (
        <div className={styles.salaryReport}>
            <div className={styles.topContent}>
                <MainTitle
                    title = "Your salary"
                />
            </div>
{/* /////////////////////////////////////////////////// */}
            <div className={styles.salesReportTop}>
                <div className={styles.salesReportNames}>
                    <DescriptiveTitle
                        title = "Items"
                    />
                    <ContentText
                        title = "Basic Salary"
                    />
                    <ContentText
                        title = "Gross Earning"
                    />
                    <ContentText
                        title = "Gross Deduction"
                    />
                    <ContentText
                        title = "Employee EPF (8%)"
                    />
                    <ContentText
                        title = "APIT"
                    />

                </div>
{/* /////////////////////////////////////////////////// */}
                <div className={styles.salesReportValues}>
                    <DescriptiveTitle
                        title = "Amount"
                    />
                    <ContentText
                        title = "ddd"
                    />
                    <ContentText
                        title = {grossEarning}
                    />
                    <ContentText
                        title = {grossDeduction}
                    />
                    <ContentText
                        title = {emplyeeEPF}
                    />
                    <ContentText
                        title = {APIT}
                    />
                </div>
            </div>
{/* /////////////////////////////////////////////////// */}
            <div className={styles.netSalaryField}>
                <div className={styles.netSalaryLabel}>
                    <Label
                        title = "Net Salary (Take Home)"
                    />
                </div>

                <div className={styles.netSalaryValue}>
                    <Label
                        title = "hhh"
                    />
                </div>
            </div>
            
{/* /////////////////////////////////////////////////// */}
            <div className={styles.contributionField}>
                <div className={styles.contributionLabel}>
                    <DescriptiveTitle
                        title = "Contribution from the Employer"
                    />
                    <ContentText
                        title = "Employer EPF (12%)"
                    />
                    <ContentText
                        title = "Employer ETF (3%)"
                    />
                </div>
{/* /////////////////////////////////////////////////// */}
                <div className={styles.contributionValues}>
                    <DescriptiveTitle
                        title = ""
                    />
                    <ContentText
                        title = {employeerEPF}
                    />
                    <ContentText
                        title = {employeerETF}
                    />
                </div>
            </div>
            <div className={styles.CTCField}>
                <ContentText
                    title = "CTC(Cost to Company)"
                />
            </div>
                <div className={styles.CTCField}>
                    <ContentText
                        title = {CTC}
                    />
            </div>
        </div>
    );
}

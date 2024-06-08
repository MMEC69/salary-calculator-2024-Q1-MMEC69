import React, { useContext } from 'react';
import {DescriptiveTitle, MainTitle, ContentText, Label} from "./Titles";
import styles from "../component_css/layout.module.css";
import { GlobalContext } from '../context/global_context';

export function SalaryReport() {
    const {
        basicSalary, 
        grossEarning,
        grossDeduct
    } = useContext(GlobalContext);

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
                        title = {basicSalary}
                    />
                    <ContentText
                        title = {grossEarning}
                    />
                    <ContentText
                        title = {`- ${grossDeduct}`}
                    />
                    <ContentText
                        title = ""
                    />
                    <ContentText
                        title = ""
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
                        title = ""
                    />
                    <ContentText
                        title = ""
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
                        title = ""
                    />
            </div>
        </div>
    );
}

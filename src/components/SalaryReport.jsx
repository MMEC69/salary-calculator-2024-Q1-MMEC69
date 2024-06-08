import React, { useContext } from 'react';
import {DescriptiveTitle, MainTitle, ContentText, Label} from "./Titles";
import styles from "../component_css/layout.module.css";
import { GlobalContext } from '../context/global_context';

export function SalaryReport() {
    const {
        basicSalary, 
        grossEarning,
        grossDeduct,
        employeeEPF,
        APIT,
        netSalary,
        employeeEPF12,
        employeeEPF3,
        CTC
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
                        title = {employeeEPF}
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
                        title = {netSalary}
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
                        title = {employeeEPF12}
                    />
                    <ContentText
                        title = {employeeEPF3}
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

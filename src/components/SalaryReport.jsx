import React from 'react';
import {DescriptiveTitle, MainTitle, ContentText} from "./Titles";
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
            <MainTitle
                    title = "Your salary"
            />
{/* /////////////////////////////////////////////////// */}
            <div>
                <div>
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
                <div>
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
            <div>
                <div>
                    <MainTitle
                        title = "Net Salary (Take Home)"
                    />
                </div>

                <div>
                    <MainTitle
                        title = {netSalary}
                    />
                </div>
            </div>
            
            <DescriptiveTitle
                title = "Contribution from the Employer"
            />
{/* /////////////////////////////////////////////////// */}
            <div>
                <div>
                    <DescriptiveTitle
                        title = "Contribution from the Employer"
                    />
                    <ContentText
                        title = "Employer EPF (12%)"
                    />
                    <ContentText
                        title = "Employer ETF (3%)"
                    />
                    <ContentText
                        title = "CTC(Cost to Company)"
                    />
                </div>
{/* /////////////////////////////////////////////////// */}
                <div>
                    <DescriptiveTitle
                        title = ""
                    />
                    <ContentText
                        title = {employeerEPF}
                    />
                    <ContentText
                        title = {employeerETF}
                    />
                    <ContentText
                        title = {CTC}
                    />
                </div>
            </div>
        </div>
    );
}

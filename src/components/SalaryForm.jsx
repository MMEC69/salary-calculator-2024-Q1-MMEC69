import React from 'react';
import {MainTitle, Label, DescriptiveTitle} from "./Titles";
import {InputField1, EarningsInput, DeductionsInput} from "./InputFields";
import {AddingButton} from "./Buttons";
import {HorizonatalLine} from "./Deco";
import styles from "../component_css/layout.module.css";

export function SalaryForm() {
  return (
    <div className={styles.salaryForm}>
        <MainTitle
            title = "Calculate Your Salary"
        />
        <form onSubmit="">
            <Label
                title = "Basic Salary"
                name = "basicSalary"
            />
            <InputField1
                type = "number"
                value = ""
                placeholder = "Basic Salary"
                onChange = ""
            />

            <Label
                title = "Earnings"
                name = "earnings"
            />
            <DescriptiveTitle
                title = "Allowance, Fixed Allowance, Bonus and etc."
            />

            <EarningsInput
                type1 = "text"
                type2 = "number"
                value1 = ""
                value2 = ""
                placeholder1 = "Pay Details (Title)"
                placeholder2 = "Amount"
                onChange1 = ""
                onChange2 = ""
                onChange3 = ""
                onChange4 = ""
            />
            
            <AddingButton
                title = "Add New Allowance"
                onClick = ""
            />

            <HorizonatalLine/>

            <Label
                title = "Deductions"
                name = "deductions"
            />
            <DescriptiveTitle
                title = "Salary Advances, Loan, Deductions and all"
            />
            <DeductionsInput
                type1 = "text"
                type2 = "number"
                value1 = ""
                value2 = ""
                placeholder1 = "Deduct Details (Title)"
                placeholder2 = "Amount"
                onChange1 = ""
                onChange2 = ""
                onChange3 = ""
            />

            <AddingButton
                title = "Add New Deduction"
                onClick = ""
            />
        </form>
    </div>
  )
}

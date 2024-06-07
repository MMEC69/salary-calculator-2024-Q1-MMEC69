import React, { useContext } from 'react';
import {MainTitle, Label, DescriptiveTitle} from "./Titles";
import {EarningsInput, DeductionsInput, InputField3} from "./InputFields";
import {AddingButton, Reset} from "./Buttons";
import {HorizonatalLine} from "./Deco";
import styles from "../component_css/layout.module.css";
import { GlobalContext } from '../context/global_context';

export function SalaryForm() {
    const {
        salaryDetails, 
        setSalaryDetails
    } = useContext(GlobalContext);

    const {
        basicSalary
    } = salaryDetails;

    const handleSalary = () => {

    }
    
  return (
    <div className={styles.salaryForm}>
        <div className={styles.topContent}>
            <MainTitle
                title = "Calculate Your Salary"
            />
            <Reset
                title = "Reset"
                onClick = ""
            />
        </div>
        
        <form onSubmit="">
            <div className={styles.formField}>
                <Label
                    title = "Basic Salary"
                    name = "basicSalary"
                />
                <InputField3
                    type = "number"
                    value = {basicSalary}
                    placeholder = "Basic Salary"
                    onChange = {(e) => {
                        setSalaryDetails({...salaryDetails, basicSalary: e.target.value});
                        handleSalary();
                    }}
                />
            </div>
            
            <div className={styles.formField}>
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
                    titleCheckBox = "EPF/ETF"
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
                    titleCheckBox = "EPF/ETF"
                />
            </div>
            
            <AddingButton
                title = "Add New Allowance"
                onClick = ""
            />

            <HorizonatalLine/>

            <div className={styles.formField}>
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
            </div>
            
        </form>
    </div>
  )
}

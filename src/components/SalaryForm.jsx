import React, { useContext, useState } from 'react';
import {MainTitle, Label, DescriptiveTitle} from "./Titles";
import {EarningsInput, DeductionsInput, InputField3} from "./InputFields";
import {AddingButton, Reset} from "./Buttons";
import {HorizonatalLine} from "./Deco";
import styles from "../component_css/layout.module.css";
import { GlobalContext } from '../context/global_context';

export function SalaryForm() {
    const {
        basicSalary, 
        setBasicSalary,
        grossEarning,
        grossDeduct,
        setGrossEarning,
        setGrossDeduct,
        items,
        setItems,
        items2,
        setItems2
    } = useContext(GlobalContext);

    //Main--------------------------------------------
    const handleSalary = async () => {
        //total earning
        let totalEarning = 0;
        if(items.length > 0){
            items?.map((item) => {
                console.log(1)
                const amount = parseFloat(item.amount);
                totalEarning = amount + totalEarning;
            });
        }
        if(isNaN(totalEarning)){
            totalEarning = 0;
        }

        let basic = parseFloat(basicSalary);
        if(isNaN(basic)){
            basic = 0;
        }else{
            totalEarning = totalEarning + basic;
        }
        
        //gross deduct
        let grossDeductValue = 0;
        if(items2.length > 0){
            items2?.map((item) => {
                const amount = parseFloat(item.amount);
                grossDeductValue = amount + grossDeductValue;
            });
        }
        if(isNaN(grossDeductValue)){
            grossDeductValue = 0;
        }

        //gross earning
        const grossEarningValue = totalEarning - grossDeductValue;
        setGrossDeduct(grossDeductValue);
        setGrossEarning(grossEarningValue);
    }
    //Earning--------------------------------------------
    const handleEarnings = (e, index) => {
        const {name, value} = e.target;
        const earnings = [...items];
        earnings[index][name] = value;
        setItems(earnings);
        console.log(items);
    }
    const handleAdd = (e) => {
        e.preventDefault();
        setItems([...items, {}]);
    }
    const handleAddClose = (e, index) => {
        e.preventDefault();
        const earningToBeDeleted = [...items];
        earningToBeDeleted.splice(index, 1);
        setItems(earningToBeDeleted);
    }
    //Deduct--------------------------------------------
    const handleDeduct = (e) => {
        e.preventDefault();
        setItems2([...items2, {}]);
    }
    const handleDeductClose = (e, index) => {
        e.preventDefault();
        const deductToBeDeleted = [...items];
        deductToBeDeleted.splice(index, 1);
        setItems(deductToBeDeleted);
    }
    const handleDeducts = (e, index) => {
        const {name, value} = e.target;
        const deducts = [...items2];
        deducts[index][name] = value;
        setItems2(deducts);
        console.log(items2);
    }
    //--------------------------------------------------
    
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
        
        <form>
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
                        setBasicSalary(e.target.value);
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

                {items?.map((item, index) => {
                    return (<EarningsInput
                        type1 = "text"
                        type2 = "number"
                        name1 = "payDetails"
                        name2 = "amount"
                        value1 = {item.payDetails}
                        value2 = {item.amount}
                        placeholder1 = "Pay Details (Title)"
                        placeholder2 = "Amount"
                        onChange1 = {(e) => handleEarnings(e, index)}
                        onChange2 = {(e) => {
                            handleEarnings(e, index);
                            handleSalary();
                        }}
                        onChange3 = {handleAddClose}
                        index = {index}
                        onChange4 = ""
                        titleCheckBox = "EPF/ETF"
                    />);

                })}

                

                {/* <EarningsInput
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
                /> */}
            </div>
            
            <AddingButton
                title = "Add New Allowance"
                onClick = {handleAdd}
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
                {items2?.map((item, index) => {
                    return (<DeductionsInput
                        type1 = "text"
                        type2 = "number"
                        name1 = "deductDetails"
                        name2 = "amount"
                        value1 = {item.deductDetails}
                        value2 = {item.amount}
                        placeholder1 = "Deduct Details (Title)"
                        placeholder2 = "Amount"
                        onChange1 = {(e) => handleDeducts(e, index)}
                        onChange2 = {(e) => {
                            handleDeducts(e, index);
                            handleSalary();
                        }}
                        index = {index}
                        onChange3 = {handleDeductClose}
                    />);
                })}
                

                <AddingButton
                    title = "Add New Deduction"
                    onClick = {handleDeduct}
                />
            </div>
            
        </form>
    </div>
  )
}

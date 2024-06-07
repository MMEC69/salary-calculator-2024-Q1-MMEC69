import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({children}) => {
    const [salaryDetails, setSalaryDetails] = useState({
        basicSalary: null,
        earnings: [],
        deductions: []
    });
    
    return(
        <GlobalContext.Provider value = {{
            salaryDetails,
            setSalaryDetails
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({children}) => {
    const [basicSalary, setBasicSalary] = useState();

    const [grossEarning, setGrossEarning] = useState(0);

    const [grossDeduct, setGrossDeduct] = useState(0);

    const [EPF, setEPF] = useState(false);

    const [employeeEPF, setEmployeeEPF] = useState(0);

    const [employeeEPF12, setEmployeeEPF12] = useState(0);

    const [APIT, setAPIT] = useState(0);

    const [temp, setTemp] = useState(0);

    const [items, setItems] = useState([]); 

    const [items2, setItems2] = useState([]); 

    const [employeeEPF3, setEmployeeEPF3] = useState([]); 

    const [netSalary, setNetSalary] = useState([]);

    const [CTC, setCTC] = useState();
    
    return(
        <GlobalContext.Provider value = {{
            basicSalary,
            setBasicSalary,
            grossEarning,
            setGrossEarning,
            items,
            setItems,
            items2,
            setItems2,
            grossDeduct,
            setGrossDeduct,
            EPF,
            setEPF,
            employeeEPF,
            setEmployeeEPF,
            APIT,
            setAPIT,
            temp,
            setTemp,
            netSalary,
            setNetSalary,
            employeeEPF12,
            setEmployeeEPF12,
            employeeEPF3,
            setEmployeeEPF3,
            CTC,
            setCTC
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
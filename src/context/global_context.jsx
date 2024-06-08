import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({children}) => {
    const [basicSalary, setBasicSalary] = useState(null);

    const [grossEarning, setGrossEarning] = useState(null);

    const [grossDeduct, setGrossDeduct] = useState(null);

    const [items, setItems] = useState([
        {
            payDetails: "",
            amount: null
        }
    ]); 

    const [items2, setItems2] = useState([
        {
            deductDetails: "",
            amount: null
        }
    ]); 
    
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
            setGrossDeduct
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
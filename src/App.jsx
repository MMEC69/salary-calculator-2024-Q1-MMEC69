// Application Owner - Eronne Cooray
import {SalaryForm} from "./components/SalaryForm";
import {SalaryReport} from "./components/SalaryReport";
import './App.css'
import { GlobalContextProvider } from "./context/global_context";

function App() {

  return (
    <div className="content">
      <GlobalContextProvider>
        <SalaryForm/>
        <SalaryReport/>
      </GlobalContextProvider>
    </div>
  )
}

export default App;

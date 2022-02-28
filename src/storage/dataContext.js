import { createContext } from "react";

const DataContext = createContext({
    candidats : [],
    formations : [],
    promotions : [],
    enseignants : []
});

export default DataContext
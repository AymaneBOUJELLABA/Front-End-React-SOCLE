import { createContext } from "react";

const DataContext = createContext({
    candidats : [],
    formations : [],
    promotions : [],
    enseignants : [],
    enseignantsProf : []
});

export default DataContext
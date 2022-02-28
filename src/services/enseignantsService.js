
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllEnseignants = async () => {

    const response = await fetch(API_URL+'/enseignants' ,
    { 
        method: 'GET'
    });
    const json = await response.json();

    return json;
}


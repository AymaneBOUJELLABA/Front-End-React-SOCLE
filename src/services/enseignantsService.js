
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllEnseignants = async () => {

    const response = await fetch(API_URL+'/enseignants' ,
    { 
        method: 'GET'
    });
    const json = await response.json();

    return json;
}

export const addEnsignant = async (enseignant) => {

    const response = await fetch(API_URL+'/enseignants',
    { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body : JSON.stringify(enseignant)
    }
    )
}
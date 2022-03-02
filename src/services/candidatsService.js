
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllCandidats = async () => {

    const response = await fetch(API_URL+'/candidats' ,
    { 
        method: 'GET'
    });
    const json = await response.json();

    return json;
}

export const addCandidat = async (candidat) => {

    const response = await fetch(API_URL+'/candidats',
    { 
        method: 'POST',
        

    }
    )
}

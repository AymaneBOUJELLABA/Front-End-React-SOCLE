
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllFormations = async () => {

    try
    {
        const response = await fetch(API_URL+'/formations' ,
        { 
            method: 'GET'
        });
        const json = await response.json();

        return json;
    }catch(e)
    {
        return {error : e};
    }
}


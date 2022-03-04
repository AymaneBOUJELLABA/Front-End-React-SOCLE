
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllFormations = async () => {

    try
    {
        const response = await fetch(API_URL+'/formations' ,
        { 
            method: 'GET'
        });
        const json = await response.json();

        return Array.isArray(json) ? json[0] : json;
    }catch(e)
    {
        return {error : e};
    }
}

export const getFromationParParam = async (param, idx) =>
{
    console.log("param" + param +" idx " + idx);
    try
    {
        let URL = API_URL+'/formations/';
    
        //1 => nom || 2 => id
        switch(idx)
        {
            case 1 : URL +='nom/'+param; break;
            case 2 : URL +=param;   break;
            default : throw new Error("Please enter a valid index between 1 and 2 --- 1 => nom  || 2 => id");
        }
        console.log(URL)

        const response = await fetch(URL,
        { 
            method: 'GET'
        });

        const json = await response.json();

        return Array.isArray(json) ? json[0] : json;
    
    }catch(e)
    {
        throw new Error(e);
    }
    
}

export const addFormation = async (formation) => {

    try
    {
        const response = await fetch(API_URL+'/formations',
        { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify(formation)
        })
        const json = await response.json();

        return Array.isArray(json) ? json[0] : json;
    }catch(e)
    {
        throw new Error(e)
    }
}
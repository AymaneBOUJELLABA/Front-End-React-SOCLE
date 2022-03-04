
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllCandidats = async () =>
{
    try
    {
        const response = await fetch(API_URL+'/candidats' ,
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

export const getCandidatsParParam = async (param, idx) =>
{
    console.log("param" + param +" idx " + idx);
    try
    {
        let URL = API_URL+'/candidats/';
    
        switch(idx)
        {
            case 1 : URL +='nom/'+param; break;
            case 2 : URL +='universite/'+param;    break;
            case 3 : URL +=param;   break;
            default : throw new Error("Please enter a valid index between 1 and 3 --- 1 => nom  || 2 => universite || 3 => id");
        }
        console.log(URL)

        const response = await fetch(URL,
        { 
            method: 'GET'
        });

        console.log(response)
        const json = await response.json();
        return json;
    
    }catch(e)
    {
        throw new Error(e);
    }
    
}

export const addCandidat = async (candidat) => {

    try
    {
        const response = await fetch(API_URL+'/candidats',
        { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify(candidat)
        })
        const json = await response.json();

        return json;
    }catch(e)
    {
        throw new Error(e)
    }
}

//const API_URL = process.env.REACT_APP_BACK_API;
const API_URL = process.env.REACT_APP_LOCAL_API;

export const getAllEnseignants = async () => {

    const response = await fetch(API_URL+'/enseignants' ,
    { 
        method: 'GET'
    });
    const json = await response.json();

    return json;
}

export const getEnseignantParParam = async (param, idx) =>
{
    try
    {
        let URL = API_URL+'/enseignants/';
    
        //1 => emailUbo  || 2 => nom || 3 => noEnseignant
        switch(idx)
        {
            case 1 : URL +='emailUbo/'+param; break;
            case 2 : URL +='nom/'+param;    break;
            case 3 : URL +=param;   break;
            default : throw new Error("Please enter a valid index between 1 and 3 --- 1 => emailUbo  || 2 => nom || 3 => noEnseignant");
        }
        console.log(URL)

        const response = await fetch(URL,
        { 
            method: 'GET'
        });
        const json = await response.json();
        return json;
    }catch(e)
    {
        throw new Error(e);
    }
    
}


export const addEnseignant = async (enseignant) => {

    const response = await fetch(API_URL+'/enseignants',
    { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body : JSON.stringify(enseignant)
    })


    const json = await response.json();

    return json;

}
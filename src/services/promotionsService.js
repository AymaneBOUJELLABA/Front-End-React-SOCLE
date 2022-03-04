
const API_URL = process.env.REACT_APP_BACK_API;

export const getAllPromotions = async () => {

    try
    {
        const response = await fetch(API_URL+'/promotions' ,
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
/**
 * 
 * @param {*} param : the param to be passed to the API
 * @param {*} idx : type of search wanted
 * @returns 
 */
export const getPromotionParParam = async (param, idx) =>
{
    console.log("param" + param +" idx " + idx);
    try
    {
        let URL = API_URL+'/formations/';
    
        //1 => lieuRentree || 2 => sigle || 3=> /codeFormation/anneeUniversitaire
        switch(idx)
        {
            case 1 : URL +='lieuRentree/'+param; break;
            case 2 : URL +='sigle/'+param; break;
            case 3 : URL +=param.codeFormation + '/'+param.anneeUniversitaire;break;
            default : throw new Error("Please enter a valid index between 1 and 3 --- 1 => lieuRentree  || 2 => sigle || 3=> codeFormation & anneUniversitaire");
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

export const addPromotion = async (promotion) => {

    try
    {
        const response = await fetch(API_URL+'/promotions',
        { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify(promotion)
        })
        const json = await response.json();
        console.log("api result : ",json);
        return json;
    }catch(e)
    {
        return {error:e}
    }
}
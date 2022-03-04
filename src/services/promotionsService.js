
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
        return {
            error:e,
            status : "severe!",
            message:e.message
        };;
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
    console.log("param",param);
    console.log(" idx ",idx);
    try
    {
        let URL = API_URL+'/promotions/';
    
        //1 => lieuRentree || 2 => sigle || 3=> /codeFormation/anneeUniversitaire
        switch(idx)
        {
            case 2 : URL +='lieuRentree/'+param; break;
            case 1 : URL +='sigle/'+param; break;
            case 3 : URL +=param.codeFormation + '/'+param.anneeUniversitaire;break;
            default : throw new Error("Please enter a valid index between 1 and 3 --- 1 => lieuRentree  || 2 => sigle || 3=> codeFormation & anneUniversitaire");
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
        return{
            error:e,
            status : "severe!",
            message:e.message
        };
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
        
        return Array.isArray(json) ? json[0] : json;
    }catch(e)
    {
        return {error:e}
    }
}

const API_URL = process.env.REACT_APP_BACK_API;

export const getAllPromotions = async () => {

    const response = await fetch(API_URL+'promotions' ,
    { 
        method: 'GET'
    });
    const json = await response.json();

    return json;
}


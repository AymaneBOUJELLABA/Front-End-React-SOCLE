import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPromotionParParam } from '../../services/promotionsService';

const {Item} = Descriptions;


const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
function ChercherPromotion()
{
    const [promotion, setPromotion] = useState();
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onSearch = (value,idx) =>
    {
        console.log("value  = " ,value);
        setDone(false);
        setLoading(true)
        
        let param;
        if(idx === 3)
        {
            const [cF,aU] = value.trim().split('@');
            param = {
                codeFormation: cF,
                anneeUniversitaire : aU
            }
        }else
        {
            param = value.trim();
        }
        console.log(param);
        const getPromotion = async (param) =>
        {
            const response = await getPromotionParParam(param,idx);
            console.log(response)
            setPromotion(response);
            setLoading(false);
            setDone(true);
        }
        getPromotion(param);
    }
    let content;

    const clearData = () => {
        setLoading(false);
        setDone(false);
    }

    
    if(loading)
    {
        console.log("Loading....")
        content = <Skeleton active />
    }else
    {
        if(!loading&&!done)
        {
            console.log("idle...")
            content = <Alert banner
                        message="Veuilez saisir le sigle, lieu de rentree ou le code/Année Universitaire de promotion"/>
        }
        if(done)
        {
            if(promotion.siglePromotion)
            {
                console.log("done & found promotion ", promotion)
                content = <Descriptions title="promotion Info" bordered size="small">
                    {Object.entries(promotion).map(([key,value]) => (
                        isObject(value) ?
                            <Item key={key} label={key}>
                                {value.anneeUniversitaire ? (value.codeFormation + '-'+value.anneeUniversitaire)
                                :  value.nomFormation ?  <Link to="/formations">{value.nomFormation}</Link>
                                : <Link to="/enseignants">{value.nom + ' ' + value.prenom}</Link>
                                }
                            </Item>
                            
                        : 
                    <Item key={'id_'+key} label={key}>{value}</Item>  
                    ))}
                </Descriptions>
            }
            else if(promotion.error)
            {
                console.log("done & ERROR!")
                content = <Alert
                            message={promotion.status + ' - ' + promotion.error}
                            description={promotion.message}
                            type="error"
                            showIcon/>
            }
            else
            {
                console.log("done BUT DIDNT FIND");
                content = <Alert message="Aucune donnée présente dans la BD!" banner/>
            }
        }
    }
    
    return (
        <Space direction="vertical">
            <Space direction="horizontal">
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="Sigle du promotion"
                        onSearch={(value) => onSearch(value,1)}
                        style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                    placeholder="Lieu de Rentrée du promotion"
                    onSearch={(value) => onSearch(value,2)}
                    style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                    placeholder="Insérer sous format Code@Année"
                    onSearch={(value) => onSearch(value,3)}
                    style={{ width: 250 }}
                />
                <Button type="ghost" onClick={clearData}>Clear</Button>
            </Space>        
           {content}
        </Space>
    );
}

export default ChercherPromotion;
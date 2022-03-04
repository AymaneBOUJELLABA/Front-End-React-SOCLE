import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { getPromotionParParam } from '../../services/promotionsService';

const {Item} = Descriptions;


function ChercherPromotion()
{
    const [promotion, setPromotion] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onSearch = (value,idx) =>
    {
        console.log("value  = " ,value);
        setDone(false);
        setLoading(true)
        const getPromotion = async (param) =>
        {
            const response = await getPromotionParParam(param,idx);
            console.log(response)
            setPromotion(response);
            setLoading(false);
            setDone(true);
        }
        getPromotion(value);
    }
    
    let content;

    const clearData = () => {
        setLoading(false);
        setDone(false);
    }

    if(loading)
    {
        content = <Skeleton active />
    }
    if(done && promotion.enseignant)
    {
        content = <Descriptions title="promotion Info" bordered>
            {Object.entries(promotion).map(([key,value]) => (
              <Item key={'id_'+key} label={key}>{value}</Item>  
            ))}
        </Descriptions>
    }
    if(done && !promotion.enseignant)
    {
        content = <Alert message="Aucune donnée présente dans la BD!" banner/>
    }
    if(promotion.error)
    {
        content = <Alert
                    message={promotion.status + ' - ' + promotion.error}
                    description={promotion.message}
                    type="error"
                    showIcon/>
    }
    if(!loading&&!done)
    {
        content = <Alert banner
                    message="Veuilez saisir le sigle, lieu de rentree ou le code de promotion"/>
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
                    placeholder="Code du Promotion"
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
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCandidatsParParam } from '../../services/candidatsService';


const {Item} = Descriptions;
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

function ChercherCandidat(props)
{

    const [candidat, setCandidat] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onSearch = (value,idx) =>
    {
        console.log("value  = " ,value);
        setDone(false);
        setLoading(true)
        const getCandidat = async (param) =>
        {
            const response = await getCandidatsParParam(param,idx);
            console.log(response)
            setCandidat(response);
            setLoading(false);
            setDone(true);
        }
        getCandidat(value);
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
    if(done && candidat.nom)
    {
        content = <Descriptions title="candidat Info" bordered size="small">
            {Object.entries(candidat).map(([key,value]) => 
            (
                <Item key={'id_'+key} label={key}>
                    {
                        isObject(value)? 
                            <Link to="/promotions">
                                {value.id.codeFormation + ' - '+value.id.anneeUniversitaire}
                            </Link>
                        : value
                    }
                </Item>  
            ))}
        </Descriptions>
    }
    if(done && !candidat.nom)
    {
        content = <Alert message="Aucune donnée présente dans la BD!" banner/>
    }
    if(candidat.error)
    {
        content = <Alert
                    message={candidat.status + ' - ' + candidat.error}
                    description={candidat.message}
                    type="error"
                    showIcon/>
    }
    if(!loading&&!done)
    {
        content = <Alert banner
                    message="Veuilez saisir Nom,L'université ou l'id du candidat"/>
    }
    return (
        <Space direction="vertical">
            <Space direction="horizontal">
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="Nom du candidat"
                        onSearch={(value) => onSearch(value,1)}
                        style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                    placeholder="université du candidat"
                    onSearch={(value) => onSearch(value,2)}
                    style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="l'ID du candidat"
                        onSearch={(value) => onSearch(value,3)}
                        style={{ width: 250 }} />
                <Button type="ghost" onClick={clearData}>Clear</Button>
            </Space>
            
            {content}
        </Space>
    );
}

export default ChercherCandidat;
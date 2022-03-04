import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { getFromationParParam } from '../../services/formationsService';

const {Item} = Descriptions;


function ChercherFormation()
{
    const [formation, setFormation] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onSearch = (value,idx) =>
    {
        console.log("value  = " ,value);
        setDone(false);
        setLoading(true)
        const getFormation = async (param) =>
        {
            const response = await getFromationParParam(param,idx);
            console.log(response)
            setFormation(response);
            setLoading(false);
            setDone(true);
        }
        getFormation(value);
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
    if(done && formation.nomFormation)
    {
        content = <Descriptions title="Formation Info" bordered>
            {Object.entries(formation).map(([key,value]) => (
              <Item key={'id_'+key} label={key}>{value}</Item>  
            ))}
        </Descriptions>
    }
    if(done && !formation.nomFormation)
    {
        content = <Alert message="Aucune donnée présente dans la BD!" banner/>
    }
    if(formation.error)
    {
        content = <Alert
                    message={formation.status + ' - ' + formation.error}
                    description={formation.message}
                    type="error"
                    showIcon/>
    }
    if(!loading&&!done)
    {
        content = <Alert banner
                    message="Veuilez saisir le nom du formation ou code de formation"/>
    }
    return (
        <Space direction="vertical">
            <Space direction="horizontal">
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="Nom du formation"
                        onSearch={(value) => onSearch(value,1)}
                        style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                    placeholder="Code du formation"
                    onSearch={(value) => onSearch(value,2)}
                    style={{ width: 250 }}
                />
                <Button type="ghost" onClick={clearData}>Clear</Button>
            </Space>
            
            {content}
        </Space>
    );
}

export default ChercherFormation;
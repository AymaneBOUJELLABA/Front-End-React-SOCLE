import { SearchOutlined } from '@ant-design/icons/lib/icons';
import { Alert, Button, Descriptions, Skeleton, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react';
import { getEnseignantParParam } from '../../services/enseignantsService';

const {Item} = Descriptions;

function SearchByParamEnseignant(props) {

    const [enseignant, setEnseignant] = useState({});
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const onSearch = (value,idx) =>
    {
        console.log("value  = " ,value);
        setDone(false);
        setLoading(true)
        const getEnseignant = async (param) =>
        {
            const response = await getEnseignantParParam(param,idx);
            console.log(response)
            setEnseignant(response);
            setLoading(false);
            setDone(true);
        }
        getEnseignant(value);
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
    if(done && enseignant.nom)
    {
        content = <Descriptions title="Enseignant Info" bordered>
            {Object.entries(enseignant).map(([key,value]) => (
              <Item key={'id_'+key} label={key}>{value}</Item>  
            ))}
        </Descriptions>
    }
    if(done && !enseignant.nom)
    {
        content = <Alert message="Aucune donnée présente dans la BD!" banner/>
    }
    if(enseignant.error)
    {
        content = <Alert
                    message={enseignant.status + ' - ' + enseignant.error}
                    description={enseignant.message}
                    type="error"
                    showIcon/>
    }
    if(!loading&&!done)
    {
        content = <Alert banner
                    message="Veuilez saisir l'email, Nom ou Numero de l'enseignant"/>
    }
    return (
        <Space direction="vertical">
            <Space direction="horizontal">
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="Email UBO de l'enseignant"
                        onSearch={(value) => onSearch(value,1)}
                        style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                    placeholder="Nom de l'enseignant"
                    onSearch={(value) => onSearch(value,2)}
                    style={{ width: 250 }}
                />
                <Search enterButton={<Button type="primary" icon={<SearchOutlined/>}/>}
                        placeholder="Numero de l'enseignant"
                        onSearch={(value) => onSearch(value,3)}
                        style={{ width: 250 }} />
                <Button type="ghost" onClick={clearData}>Clear</Button>
            </Space>
            
            {content}
        </Space>
    );
}

export default SearchByParamEnseignant;
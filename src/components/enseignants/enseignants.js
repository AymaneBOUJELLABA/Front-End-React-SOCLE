import React, { useEffect, useState } from 'react';

import { PageHeader, Pagination, Table } from 'antd';

import { getAllEnseignants } from '../../services/enseignantsService'; 
import { Container } from 'react-bootstrap';

const columns = [
    { 
        title: 'Nom',
        dataIndex: 'nom',
        key: 'nom'
    },
    { 
        title: 'Prenom',
        dataIndex: 'prenom',
        key: 'prenom'
    },
    { 
        title: 'Adresse',
        dataIndex: 'adresse',
        key: 'adresse'
    },
    { 
        title: 'Email Ubo',
        dataIndex: 'emailUbo',
        key: 'emailUbo'
    },
    { 
        title: 'N° Mobile',
        dataIndex: 'mobile',
        key: 'mobile'
    }
]
function Enseignants(props)
{
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        async function loadData()
        {
            const response = await getAllEnseignants();
            console.log(response);
            setData(response);
        }
        
        loadData();

        return () => {
            setData([])
        }
    }, []);

    return (
        <Container>
            <PageHeader title="Liste des Enseigants"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
        
    );
}

export default Enseignants;
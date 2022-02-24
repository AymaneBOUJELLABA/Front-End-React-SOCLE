import { PageHeader, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './candidats.css';

import { getAllCandidats } from '../../services/candidatsService';
import { Link } from 'react-router-dom';


const columns = [
    {
        title :'Nom',
        dataIndex : 'nom',
        key : 'nom'
    },
    {
        title :'Prenom',
        dataIndex : 'prenom',
        key : 'prenom'
    },
    {
        title :'Email',
        dataIndex : 'email',
        key : 'email'
    },
    {
        title :'Nationalité',
        dataIndex : 'nationalite',
        key : 'nationalite'
    },
    {
        title :'Promotion',
        dataIndex : 'promotion',
        key : 'promotion',
        render : promotion => <Link to="/promotions">{promotion.siglePromotion}</Link>
    },
    
    
]
function Candidats(props)
{
    const [data, setData] = useState();

    useEffect(() =>
    {
        async function loadData()
        {
            const response = await getAllCandidats();
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
            <PageHeader title="Liste des Candidats"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
    );
}

export default Candidats;
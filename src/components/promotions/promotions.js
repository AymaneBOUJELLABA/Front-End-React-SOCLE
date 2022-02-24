import { PageHeader, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllPromotions } from '../../services/promotionsService';
import './promotions.css';


const columns = [
    {
        title:'Sigle Promotion',
        dataIndex : 'siglePromotion',
        key:'siglePromotion'
    },
    {
        title:'Formation',
        dataIndex : 'formation',
        key:'formation',
        render : formation => <Link to="/formations">{formation.codeFormation}</Link>
    },
    {
        title:'Année Universitaire',
        dataIndex : 'id',
        key:'anneeUniversitaire',
        render : id => <>{id.anneeUniversitaire}</>
    },
    {
        title:'Enseignant',
        dataIndex : 'enseignant',
        key:'enseignant',
        render : enseignant => <Link to="/enseignant">{enseignant.nom + ' ' + enseignant.prenom}</Link>
    },
    
]
function Promotions(props)
{
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        async function loadData()
        {
            const response = await getAllPromotions();
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
            <PageHeader title="Liste des Promotions"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
     );
}

export default Promotions;
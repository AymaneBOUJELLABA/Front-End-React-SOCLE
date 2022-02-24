import { PageHeader, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getAllFormations } from '../../services/formationsService';



const columns = [
    {
        title:'Code Formation',
        dataIndex: 'codeFormation',
        key : 'codeFormation'
    },
    {
        title:'Date début d\'Accreditation',
        dataIndex: 'debutAccreditation',
        key : 'debutAccreditation'
    },
    {
        title:'Nom Formation',
        dataIndex: 'nomFormation',
        key:'nomFormation'
    },
    {
        title:'Diplome / N°Année',
        dataIndex: 'diplome-annee',
        render : (text,record) => (<span>{record.diplome} / {record.n0Annee + ' années'}</span>)
    }
]
function Formations(props)
{
    const [data, setData] = useState();

    useEffect(() =>
    {
        async function loadData()
        {
            const response = await getAllFormations();
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
            <PageHeader title="Liste des Formations"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={data}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
    );
}

export default Formations;
import { PageHeader, Table } from 'antd';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';

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
    const {formations} = useContext(DataContext);
    const navigate = useNavigate();
    return (  
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                title="Formations" 
                subTitle="Liste des Formations"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={formations}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
    );
}

export default Formations;
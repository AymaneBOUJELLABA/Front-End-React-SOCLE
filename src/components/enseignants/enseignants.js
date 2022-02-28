import React, { useContext } from 'react';
import { PageHeader, Table } from 'antd';
import { Container } from 'react-bootstrap';
import DataContext from '../../storage/dataContext';
import { useNavigate } from 'react-router-dom';


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
    const {enseignants} = useContext(DataContext);
    const navigate = useNavigate();
    return (
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                title="Enseignants" 
                subTitle="Liste des Enseignants"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={enseignants}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
        
    );
}

export default Enseignants;
import { PageHeader, Table } from 'antd';
import React, { useContext} from 'react';
import { Container } from 'react-bootstrap';
import './candidats.css';

import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';


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
    }
    
    
]
function Candidats(props)
{
    const navigate = useNavigate();
    const {candidats} = useContext(DataContext);

    return (  
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                title="Candidats" 
                subTitle="Liste des Candidats"/>
            <Table
                size="small" 
                columns={columns}
                dataSource={candidats}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
    );
}

export default Candidats;
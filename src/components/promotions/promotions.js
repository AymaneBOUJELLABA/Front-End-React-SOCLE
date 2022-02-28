import { PageHeader, Table } from 'antd';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
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
        render : enseignant => <Link to="/enseignants">{enseignant.nom + ' ' + enseignant.prenom}</Link>
    },
    
]
function Promotions(props)
{
    const {promotions} = useContext(DataContext);
    const navigate = useNavigate();
    return ( 
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                title="Enseignants" 
                subTitle="Liste des Enseignants"/>
            <Table 
                size="small" 
                columns={columns}
                dataSource={promotions}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
        </Container>
     );
}

export default Promotions;
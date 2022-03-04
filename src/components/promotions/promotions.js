import { Alert, PageHeader, Table } from 'antd';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
import MainPage from '../shared/MainPage';
import AddPromotion from './addPromotion';
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
        <>
        <MainPage title="Promotions"
            columns={columns}
            subTitleList={["Liste des Promotions","Ajouter Une Promotion","Chercher Une Promotion"]}
            arrayData={promotions}
            addComponent={<AddPromotion />} 
            searchComponent={<span>chercher</span>}
            />
        </>
     );
}

export default Promotions;
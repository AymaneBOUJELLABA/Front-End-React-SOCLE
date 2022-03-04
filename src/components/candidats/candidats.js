import { Alert, PageHeader, Table } from 'antd';
import React, { useContext} from 'react';
import { Container } from 'react-bootstrap';
import './candidats.css';

import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
import MainPage from '../shared/MainPage';
import ChercherCandidat from './chercherCandidat';


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
        <>
        <MainPage title="Candidats"
            columns={columns}
            subTitleList={["Liste des Candidats","Ajouter Un Candidat","Chercher Un Candidat"]}
            arrayData={candidats}
            addComponent={<span>ajouter</span>} 
            searchComponent={<ChercherCandidat />}
            />
        </>
    );
}

export default Candidats;
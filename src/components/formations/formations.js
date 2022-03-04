import { Alert, PageHeader, Table } from 'antd';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../storage/dataContext';
import MainPage from '../shared/MainPage';
import AddFormation from './addFormation';
import ChercherFormation from './chercherFormation';

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

    return (  
        <>
        <MainPage title="Formations"
            columns={columns}
            subTitleList={["Liste des Formations","Ajouter Une Formation","Chercher Une Formation"]}
            arrayData={formations}
            addComponent={<AddFormation />} 
            searchComponent={<ChercherFormation/>}
            />
        </>

    );
}

export default Formations;
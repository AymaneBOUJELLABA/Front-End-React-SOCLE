import React, { useContext} from 'react';
import DataContext from '../../storage/dataContext';
import AddEnseignant from './addEnseignant';
import SearchByParamEnseignant from './chercherEnseignant';
import MainPage from '../shared/MainPage';


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
        
    return (
        <>
        <MainPage title="Enseignants"
            columns={columns}
            subTitleList={["Liste des Enseignants","Ajouter Un Enseignant","Chercher un Enseignant"]}
            arrayData={enseignants}
            addComponent={<AddEnseignant />} 
            searchComponent={<SearchByParamEnseignant />}
            />
        </>
    );
}

export default Enseignants;
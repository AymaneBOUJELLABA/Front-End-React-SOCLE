import React, { useContext, useState } from 'react';
import { Alert, PageHeader, Table, Tabs } from 'antd';
import { Container } from 'react-bootstrap';
import DataContext from '../../storage/dataContext';
import { useNavigate } from 'react-router-dom';
import AddEnseignant from './addEnseignant';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons/lib/icons';


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
    const [selectedTab, setSelectedTab] = useState(1);
    const navigate = useNavigate();

    return (
        <>
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                            title="Enseignants"
                            subTitle={selectedTab == 1 ?"Liste des Enseignants" : "Ajouter un Enseignant"}/>
            <Tabs defaultActiveKey={selectedTab} tabPosition="top" onChange={(key)=>setSelectedTab(key)}>
                <Tabs.TabPane
                    tab={
                        <span>
                        <AppleOutlined />
                        Liste des Enseignants
                        </span>
                    }
                    key="1"
                >
                    {enseignants[0] && 
                    <Table 
                        size="small" 
                        columns={columns}
                        dataSource={enseignants}
                        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                        />}
                    {enseignants.error &&
                    <Alert
                        message={enseignants.status + ' - ' + enseignants.error}
                        description={enseignants.message}
                        type="error"
                        showIcon
                        />}
                </Tabs.TabPane>
                <Tabs.TabPane style={{maxHeight:'65vh',overflow: 'auto'}}
                tab={
                    <span>
                    <AndroidOutlined />
                    Ajouter un Enseignant
                    </span>
                }
                key="2"
                >
                    <AddEnseignant />
                </Tabs.TabPane>
            </Tabs>
        </Container>
        </>
    );
}

export default Enseignants;
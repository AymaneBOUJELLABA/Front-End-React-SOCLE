import React, { useContext, useState } from 'react';
import { Alert, PageHeader, Table, Tabs } from 'antd';
import { Container } from 'react-bootstrap';
import DataContext from '../../storage/dataContext';
import { useNavigate } from 'react-router-dom';
import AddEnseignant from './addEnseignant';
import { AndroidOutlined, AppleOutlined, ProfileOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons/lib/icons';
import SearchByParamEnseignant from './enseignantParUbo';
import { render } from '@testing-library/react';


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


    let subTitle;
    if(selectedTab == 1)
        subTitle = 'Liste des Enseignants';
    if(selectedTab == 2)
        subTitle = 'Ajouter Un Enseignant';
    if(selectedTab == 3)
        subTitle = 'Chercher un Enseignant';
        
    return (
        <>
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                            title="Enseignants"
                            subTitle={subTitle}/>
            <Tabs defaultActiveKey={selectedTab} tabPosition="top" onChange={(key)=>setSelectedTab(key)}>
                <Tabs.TabPane
                    tab={
                        <span>
                        <ProfileOutlined />
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
                    <UserAddOutlined />
                    Ajouter un Enseignant
                    </span>
                }
                key="2"
                >
                    <AddEnseignant />
                </Tabs.TabPane>

                <Tabs.TabPane tab={<span><SearchOutlined />Chercher Un Enseignant</span>}
                        key="3">
                    <SearchByParamEnseignant />
                </Tabs.TabPane>
            </Tabs>
        </Container>
        </>
    );
}

export default Enseignants;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons/lib/icons';
import TableData from './TableData';
import {Container} from 'react-bootstrap'
import { PageHeader, Tabs } from 'antd';

//a main page component that recieves :
/**
 * subTitleList : ordered list of subTitles
 * title : title of page
 * columns : for table
 * arrayData : array of data
 * 
 * addComponent : a react node component for the add tab
 * searchComponent : search component for the search tab
*/
function MainPage(props)
{
    const [selectedTab, setSelectedTab] = useState(1);
    const navigate = useNavigate();

    let subTitle;
    if(selectedTab == 1)
        subTitle = props.subTitleList[0];
    if(selectedTab == 2)
        subTitle = props.subTitleList[1];
    if(selectedTab == 3)
        subTitle = props.subTitleList[2];
    return (
        <Container>
            <PageHeader onBack={()=>{navigate('/home')}}
                            title={props.title}
                            subTitle={subTitle}/>
            <Tabs defaultActiveKey={selectedTab} tabPosition="top" onChange={(key)=>setSelectedTab(key)}>
                <Tabs.TabPane
                    tab={
                        <span>
                        <ProfileOutlined />
                        {props.subTitleList[0]}
                        </span>
                    }
                    key="1"
                >
                    <TableData columns={props.columns} array={props.arrayData} />
                </Tabs.TabPane>
                <Tabs.TabPane style={{maxHeight:'65vh',overflow: 'auto'}}
                tab={
                    <span>
                    <UserAddOutlined />
                    {props.subTitleList[1]}
                    </span>
                }
                key="2"
                >
                    {props.addComponent}
                </Tabs.TabPane>

                <Tabs.TabPane tab={<span><SearchOutlined />{props.subTitleList[2]}</span>}
                        key="3">
                    {props.searchComponent}
                </Tabs.TabPane>
            </Tabs>
        </Container>
    );
}

export default MainPage;
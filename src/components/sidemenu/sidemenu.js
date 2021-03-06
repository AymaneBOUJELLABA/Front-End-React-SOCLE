import React from 'react';
import './sidemenu.css';

import { Layout, Menu } from 'antd';
import { Link,useLocation } from 'react-router-dom';
import { BookOutlined, ExperimentOutlined, HomeTwoTone, ReconciliationOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu(props)
{
    const path = useLocation();
    
    let selectedMenu;
    if(path.pathname ==='/home')
        selectedMenu= '1';
    if(path.pathname ==='/formations')
        selectedMenu = '2';
    if(path.pathname ==='/enseignants')
        selectedMenu = '3';
    if(path.pathname ==='/candidats')
        selectedMenu = '4';
    if(path.pathname ==='/promotions')
        selectedMenu = '5';
    return (
        <Sider>
            <Menu theme="dark" mode="inline" defaultOpenKeys={['sub']} selectedKeys={[selectedMenu]} >
                <Menu.Item key="1" icon={<HomeTwoTone />}>
                    <Link to='home'>
                        Tableau de bord
                    </Link>
                </Menu.Item>
                <SubMenu key="sub" title="Administration" icon={<SettingOutlined />}>
                    <Menu.Item key="2" icon={<BookOutlined />}>
                        <Link to='formations'>
                            Formations
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TeamOutlined />}>
                        <Link to="enseignants">
                            Enseignants
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ExperimentOutlined />}>
                        <Link to="candidats">
                            Candidats
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ReconciliationOutlined />}>
                        <Link to="promotions">
                            Promotions
                        </Link>
                    </Menu.Item>
                </SubMenu> 
            </Menu>
        </Sider>
    );
}

export default SideMenu;
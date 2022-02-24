import React from 'react';
import './sidemenu.css';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BookOutlined, ExperimentOutlined, HomeTwoTone, SettingOutlined, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


function SideMenu(props)
{
    return (
        <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
                </SubMenu> 
            </Menu>
        </Sider>
    );
}

export default SideMenu;
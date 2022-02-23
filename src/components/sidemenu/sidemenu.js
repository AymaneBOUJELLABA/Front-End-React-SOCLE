import React from 'react';
import './sidemenu.css';

import { Layout, Menu } from 'antd';
import { BookOutlined, ExperimentOutlined, HomeTwoTone, SettingOutlined, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu(props)
{
    return (
        <Sider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeTwoTone />}>
                    Tableau de bord
                </Menu.Item>
                <SubMenu key="sub" title="Administration" icon={<SettingOutlined />}>
                    <Menu.Item key="2" icon={<BookOutlined />}>
                        Formations
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TeamOutlined />}>
                        Enseignants
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ExperimentOutlined />}>
                        Unités d'Etudes
                    </Menu.Item>
                </SubMenu> 
            </Menu>
        </Sider>
    );
}

export default SideMenu;
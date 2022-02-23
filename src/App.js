import './App.css';

import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from './components/sidemenu/sidemenu';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App() {
  return (
    <Layout style={{height: '100vh'}}>
      <SideMenu />
      <Layout>
          <Content style={{ margin: '24px 16px 0'}}>
              <div className="content" style={{ padding: 24, height: '100%' }}>
                <Outlet />
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>M2 DOSI - UBO ©2022 Created by BOUJELLABA Aymane</Footer>
      </Layout>
    </Layout>
  );
}

export default App;

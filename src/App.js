import logo from './logo.svg';
import './App.css';

import {Row, Col , Container} from 'react-bootstrap'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

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
              content
              </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>M2 DOSI - UBO ©2022 Created by BOUJELLABA Aymane</Footer>
      </Layout>
    </Layout>
  );
}

export default App;

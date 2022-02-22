import logo from './logo.svg';
import './App.css';
import {Row, Col , Container} from 'react-bootstrap'
import SideMenu from './components/sidemenu/sidemenu';

function App() {
  return (
      <Row>
        <Col sm={2} className="menu">
          <SideMenu />
        </Col>
        <Col sm={10} className="content">
          Content
        </Col>
      </Row>
  );
}

export default App;

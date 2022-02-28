import React, { useContext } from 'react';

import { Avatar, Badge, Card, Tag } from 'antd';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './homepage.css';
import formationsImg from '../../images/formations.svg';
import enseignantsImg from '../../images/teachers.svg';
import ueImg from '../../images/ue.svg';
import candidats from '../../images/candidats.svg';
import DataContext from '../../storage/dataContext';

function HomePage(props) 
{
    const data = useContext(DataContext);


    return (
        <Container style={{display:'flex' , justifyContent: 'space-around'}}>
            <Link to="/formations">
                <Card hoverable cover={
                    <Badge count={data.formations.length} status="success">
                        <Avatar src={formationsImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Formations"
                        description={<Tag color="green">{data.formations.length}</Tag>}
                    />
                </Card>
            </Link>
            
            <Link to="/promotions">
                <Card hoverable cover={
                    <Badge count={data.promotions.length} status="success">
                        <Avatar src={ueImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Promotions"
                        description={<Tag color="green">{data.promotions.length}</Tag>}
                    />
                </Card>
            </Link>
            
            <Link to="/enseignants">
                <Card hoverable 
                    cover={
                        <Badge count={data.enseignants.length} status="success">
                            <Avatar src={enseignantsImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                        </Badge>
                    }
                >
                    <Card.Meta className="stat-title" title="Enseignants"
                            description={<Tag color="green">{data.enseignants.length}</Tag>} />
                </Card>
            </Link>
            
            <Link to="/candidats">
                <Card hoverable cover={
                    <Badge count={data.candidats.length} status="success">
                        <Avatar src={candidats} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Candidats" 
                        description={<Tag color="green">{data.candidats.length}</Tag>}
                    />
                </Card>
            </Link>
            
            
             
        </Container>
    );
}

export default HomePage;
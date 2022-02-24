import React from 'react';

import { Avatar, Badge, Card } from 'antd';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './homepage.css';
import formationsImg from '../../images/formations.svg';
import enseignantsImg from '../../images/teachers.svg';
import ueImg from '../../images/ue.svg';
import candidats from '../../images/candidats.svg';

function HomePage(props) 
{
    return (
        <Container style={{display:'flex' , justifyContent: 'space-around'}}>
            <Link to="/formations">
                <Card hoverable cover={
                    <Badge count={99} status="success">
                        <Avatar src={formationsImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Formations"/>
                </Card>
            </Link>
            
            <Link to="/promotions">
                <Card hoverable cover={
                    <Badge count={99} status="success">
                        <Avatar src={ueImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Promotions"/>
                </Card>
            </Link>
            
            <Link to="/enseignants">
                <Card hoverable 
                    cover={
                        <Badge count={99} status="success">
                            <Avatar src={enseignantsImg} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                        </Badge>
                    }
                >
                    <Card.Meta className="stat-title" title="Enseignants"/>
                </Card>
            </Link>
            
            <Link to="/candidats">
                <Card hoverable cover={
                    <Badge count={99} status="success">
                        <Avatar src={candidats} shape="square" size={{sm:100,xl:250,xxl:250}}/>
                    </Badge>
                }>
                    <Card.Meta className="stat-title" title="Candidats"/>
                </Card>
            </Link>
            
            
             
        </Container>
    );
}

export default HomePage;
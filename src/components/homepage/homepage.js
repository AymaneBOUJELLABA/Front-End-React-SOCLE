import React from 'react';

import { Avatar, Badge, Card } from 'antd';
import { Container } from 'react-bootstrap';

import './homepage.css';
import formationsImg from '../../images/formations.svg';
import enseignantsImg from '../../images/teachers.svg';
import ueImg from '../../images/ue.svg';

function HomePage(props) 
{
    return (
        <Container style={{display:'flex' , justifyContent: 'space-around'}}>
            <Card hoverable cover={
                <Badge count={99} status="success">
                    <Avatar src={formationsImg} shape="square" size={{xl:300,xxl:300}}/>
                </Badge>
            }>
                <Card.Meta className="stat-title" title="Formations"/>
            </Card>
            <Card hoverable cover={
                <Badge count={99} status="success">
                    <Avatar src={enseignantsImg} shape="square" size={{xl:300,xxl:300}}/>
                </Badge>
            }>
                <Card.Meta className="stat-title" title="Enseignants"/>
            </Card>
            <Card hoverable cover={
                <Badge count={99} status="success">
                    <Avatar src={ueImg} shape="square" size={{xl:300,xxl:300}}/>
                </Badge>
            }>
                <Card.Meta className="stat-title" title="Unités d'Etude"/>
            </Card>  
        </Container>
    );
}

export default HomePage;
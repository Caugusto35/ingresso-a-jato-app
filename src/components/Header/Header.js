import React from 'react';
import { Text, View, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    return (
        <Container>
            <Grid>
                <Col style={{ backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>

                </Col>
                <Col style={{ width: 225, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon>
                        <FontAwesome name="fighter-jet" size={42} color="#622C8D" />
                    </Icon>
                    <Displayname>
                        Ingresso à Jato
                    </Displayname>
                </Col>
                <Col style={{ backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' }}>

                </Col>
            </Grid>

        </Container>
    );
}

const Container = styled.View`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Displayname = styled.Text`
    top: 10px;
    color: #f9f9f9;
    font-size: 20px;
    font-weight: bold;

`;
const Icon = styled.View`
    position: absolute;
    top: 35px;
    right: 5px;
`;
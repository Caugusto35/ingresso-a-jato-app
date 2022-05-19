import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";

export default function CardTicket({ data }) {
    const navigation = useNavigation();
    return (
        <Container onPress={() => navigation.navigate('Reserva de Ingresso', {
            event: data.name,
            date: data.date,
            hour: data.hour,
            image: data.image
        })}>
            <Background source={{ uri: `${data.image}` }} resizeMode='cover' />
            <Title>{data.name}</Title>
            <Description>{data.date}</Description>
            <Description2>{data.hour}</Description2>
        </Container>
    );
}

const Container = styled.TouchableOpacity`
    height: 170px;
    width: 350px;
    padding: 2px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: #121212;
`

const Title = styled.Text`
    position: absolute;
    left: 5px;
    color: rgba(177, 177, 191, 0.87);
    font-size: 50px;
`

const Description = styled.Text`
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 26px;
`

const Description2 = styled.Text`
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 26px;
`

const Background = styled.Image`
    height: 100%;
    border-radius: 10px;
    opacity: 0.3;
`
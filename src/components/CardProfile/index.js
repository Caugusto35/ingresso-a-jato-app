import React, { useEffect, useState } from 'react';
import { View, Image, Alert } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons, Feather } from '@expo/vector-icons';
import TicketApi from '../../services/ticketApi';

export default function CardProfile({ data }) {
    const navigation = useNavigation();

    const AlertaUpdate = () => {
        Alert.prompt('Alterar CPF', '',
            [
                {
                    text: 'Cancelar',
                    style: "destructive"
                },
                {
                    text: 'Alterar',
                    onPress: async (text) => {
                        await TicketApi.put(`/ticket/${data.ticket}`, {
                            cpf: text,
                            event: `${data.event}`,
                            date: `${data.date}`,
                            hour: `${data.hour}`
                        })
                            .then(function (response) {
                                console.log(response);
                                Alert.alert('CPF alterado', "Realize uma nova busca com o novo cpf")
                                navigation.navigate('Home')
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }
            ],
            "plain-text"
        )
    }
    const AlertaDelete = () => {
        Alert.alert('Cancelar reserva?', '',
            [
                {
                    text: 'Não',
                    style: "destructive"
                },
                {
                    text: 'Sim',
                    onPress: async () => {
                        await TicketApi.delete(`/ticket/${data.ticket}`)
                            .then(function (response) {
                                console.log(response);
                                Alert.alert('Reserva cancelada', "")
                                navigation.navigate('Home')
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                }
            ]
        )
    }

    function RightActions() {
        return (
            <DragDelete onPress={AlertaDelete}>
                <Ionicons name="close" size={42} color="#f9f9f9" />
            </DragDelete>
        )
    }
    function LeftActions() {
        return (
            <DragAccept onPress={AlertaUpdate}>
                <Feather name="edit" size={40} color="#f9f9f9" />
            </DragAccept>
        )
    }

    return (
        <View>
            <Swipeable
                renderRightActions={RightActions}
                renderLeftActions={LeftActions}
            >
                <Container activeOpacity={0.9}>
                    <Title>{data.event}</Title>
                    <Description>{data.date}</Description>
                    <Description2>{data.hour}</Description2>
                    <Description3>{data.cpf}</Description3>
                    <Description4>{data.ticket}</Description4>
                    <QrCode source={{ uri: `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${data.ticket}` }} />
                </Container>
            </Swipeable>
        </View>
    );
}

const Container = styled.TouchableOpacity`
    height: 350px;
    width: 370px;
    padding: 2px;
    margin-bottom: 15px;
    border-radius: 10px;
    background-color: #121212;
    border: #FFCB74;
    
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
    bottom: 200px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 26px;
`

const Description2 = styled.Text`
    position: absolute;
    right: 10px;
    bottom: 200px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 26px;
`

const Description3 = styled.Text`
    position: absolute;
    right: 30%;
    bottom: 165px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 26px;
`
const Description4 = styled.Text`
    position: absolute;
    right: 20%;
    bottom: 1px;
    color: rgba(177, 177, 191, 0.67);
    font-size: 12px;
`

const Background = styled.Image`
    height: 100%;
    border-radius: 10px;
    opacity: 0.3;
`
const QrCode = styled.Image`
    position: absolute;
    align-self: center;
    bottom: 15px;
    height: 150px;
    width: 150px;
    border-radius: 10px;
`
const DragDelete = styled.TouchableOpacity`
width: 70px;
height: 350px;
margin-left: 10px;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color: #1c1c1c;
`;

const DragAccept = styled.TouchableOpacity`
width: 70px;
height: 350px;
margin-right: 10px;
align-items: center;
justify-content: center;
border-radius: 10px;
background-color: #1c1c1c;
`;
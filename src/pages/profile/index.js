import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";
import CardProfile from '../../components/CardProfile';
import TicketApi from '../../services/ticketApi';
import { useRoute } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    const route = useRoute();
    const cpf = route.params.cpf;
    const [data, setData] = useState([]);

    useEffect(() => {
        TicketApi.get(`/ticket/${cpf}`).then(({ data }) => {
            setData(data.data)
        })
        console.log(data)
    }, [])

    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({ item }) => <CardProfile data={item}
                />}
                keyExtractor={item => String(item.id)}
            />
        </Container>
    )
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    padding-top: 10px;
    padding-bottom: 20px;
    align-items: center;
    background-color: #0b0b0c;
`

const Container2 = styled.KeyboardAvoidingView`
    align-items: center;
    background-color: transparent;
`

const Title = styled.Text`
    margin: 10px;
    color: rgba(177, 177, 191, 0.97);
    font-size: 24px;
`
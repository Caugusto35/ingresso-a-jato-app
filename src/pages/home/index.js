import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text, FlatList, TouchableWithoutFeedback, Keyboard, StyleSheet, Button, Alert } from 'react-native';
import CardTicket from "../../components/CardTicket";
import { eventos } from "../../services/eventos";
import FirstInput from "../../components/input/FirstInput";
import { useNavigation } from "@react-navigation/native";
import FirstBS from "../../components/CustomButton/FirstBS";

export default function Home() {
    const [cpf, setCpf] = useState('');
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Container2>
                    <FirstInput
                        onChangeText={setCpf}
                        keyboardType="numeric"
                        Title={"title"}
                        Value={cpf}
                        placeholder={"Digite o CPF"}
                        placeholderTextColor={"rgba(177, 177, 191, 0.47)"}
                    />
                    <FirstBS
                        title={"Meus ingressos"}
                        activeOpacity={0.7}
                        onPress={() => {
                            if (!cpf) {
                                Alert.alert('Digite o CPF', '')
                            } else if (cpf.length < 11) {
                                Alert.alert('CPF deve ter 11 digitos', '')
                            } else {
                                navigation.navigate('Reservas', {
                                    cpf: cpf
                                })
                            }
                        }}
                    />
                </Container2>
                <FlatList
                    data={eventos}
                    renderItem={({ item }) => <CardTicket data={item}
                    />}
                    keyExtractor={item => String(item.id)}
                />
            </Container>
        </TouchableWithoutFeedback>
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
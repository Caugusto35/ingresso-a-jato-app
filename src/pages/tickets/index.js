import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import styled from 'styled-components';
import { useRoute } from '@react-navigation/native';
import FirstInput from '../../components/input/FirstInput';
import TicketApi from '../../services/ticketApi';
import FirstBS from '../../components/CustomButton/FirstBS';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

export default function Tickets() {
  const [cpf, setCpf] = useState('')
  const [lottie, setLottie] = useState(false)
  const route = useRoute();
  const navigation = useNavigation();

  const CreateReserva = async () => {
    await TicketApi.post('/ticket', {
      cpf: cpf,
      event: `${route.params.event}`,
      date: `${route.params.date}`,
      hour: `${route.params.hour}`,
      image: `${route.params.image}`
    })
      .then(function (response) {
        setLottie(true)
        console.log(response);
        Alert.alert('Reserva concluída', 'Consulte em Meus Ingressos')
        navigation.navigate('Home')
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Container2>
          <LottieView
            source={require("../../assets/OK.json")}
            autoPlay={lottie}
            loop={true}
            resizeMode='cover'
            style={{
              position: 'absolute',
              top: 1,
              height: 450,
              width: 350,
            }}
          />
        </Container2>
        <Background source={{ uri: `${route.params.image}` }} />
        <Title>{route.params.event}</Title>
        <Description>{route.params.date}</Description>
        <Description2>{route.params.hour}</Description2>
        <Container2>
          <FirstInput
            onChangeText={setCpf}
            keyboardType="numeric"
            Title={"title"}
            placeholder={"Digite o CPF para reservar"}
            placeholderTextColor={"rgba(177, 177, 191, 0.67)"}
          />
          <FirstBS
            title={"Reservar"}
            activeOpacity={0.7}
            onPress={CreateReserva}
          />
        </Container2>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    background-color: #0b0b0c;
`

const Container2 = styled.KeyboardAvoidingView`
    position: absolute;
    top: 300px;
    align-items: center;
    background-color: transparent;
`

const Background = styled.Image`
    height: 100%;
    width: 100%;
    align-self: center;
    justify-content: center;
    opacity: 0.2;
`
const Title = styled.Text`
    position: absolute;
    align-self: flex-start;
    top: 10px;
    left: 5px;
    color: rgba(177, 177, 191, 0.99);
    font-size: 55px;
`

const Description = styled.Text`
    position: absolute;
    left: 10px;
    top: 200px;
    color: rgba(177, 177, 191, 0.87);
    font-size: 40px;
`

const Description2 = styled.Text`
    position: absolute;
    right: 10px;
    top: 200px;
    color: rgba(177, 177, 191, 0.87);
    font-size: 40px;
`
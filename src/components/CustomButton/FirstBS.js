import styled from "styled-components";
import { View } from 'react-native'
import React from 'react'

export default function FirstBS({ title, onChange, activeOpacity, onPress }) {
    return (
        <View>
            <Button
                onChange={onChange}
                activeOpacity={activeOpacity}
                onPress={onPress}>
                <TextButton>{title}</TextButton>
            </Button>
        </View>
    )
}

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 262px;
    height: 50px;
    border-radius: 20px;
    background-color: #FFCB74;
    margin: 10px;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #2F2F2F;
`;
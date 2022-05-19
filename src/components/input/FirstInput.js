import React from "react";
import styled from "styled-components";
import { View } from 'react-native';

export default function FirstInput({ title, onChangeText, placeholder, placeholderTextColor, keyboardType, secureTextEntry }) {
    return (
        <View>
            <Input
                onChangeText={onChangeText}
                Title={title}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export const Input = styled.TextInput`
    width: 262px;
    height: 50px;
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    border: #FFCB74 2px;
    color: #f2f2f2;
    background-color: transparent;
`;
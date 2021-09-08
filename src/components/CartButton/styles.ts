import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)``;

export const ContainerButton = styled.View`
    width:${RFValue(68)}px;
    height:${RFValue(78)}px;
    background-color: ${({theme}) => theme.colors.text_dark};
    
    justify-content: center;
    align-items: center;

    border-bottom-left-radius:${RFValue(32)}px ;
    border-top-right-radius:${RFValue(32)}px ;
`;

export const Icon = styled(Ionicons)`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;
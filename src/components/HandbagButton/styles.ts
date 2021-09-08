import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Container = styled(RectButton)`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background-color: ${({theme}) =>theme.colors.secondary};
    border-radius: ${RFValue(24)}px;
    padding: 18px;
    align-items:center;
    justify-content: center;
`;

export const Icon = styled(SimpleLineIcons)`
    font-size:${RFValue(18)}px;
    color: ${({theme})=> theme.colors.shape};
`;

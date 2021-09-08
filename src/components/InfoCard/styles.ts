import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding:${RFValue(24)}px;
`;

export const ContainerWrapper = styled.View``;


export const Price = styled.Text`
    margin-left: -8px;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(22)}px;
`;

export const PageCount = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
`;

export const ContainerButton = styled.View``;
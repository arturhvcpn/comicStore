import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.shape};
    width: ${RFValue(65)}%;
    height:${RFValue(300)}px;
    border-radius: ${RFValue(28)}px;
`;
export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(12)}px ${RFValue(14)}px;
    margin-top: ${RFValue(14)}px;
`;

export const ContainerImageContent = styled.SafeAreaView`
    flex:1;
    align-items: center;
    justify-content: center;
    
    margin-top: ${RFValue(12)}px;
`;

export const ImageContent = styled.Image`
    width: ${RFValue(124)}px;
    height: ${RFValue(100)}%;
    border-radius: ${RFValue(2)}px;
`;

export const Footer = styled.View`
    /* flex: 1; */
    background-color: ${({theme})=> theme.colors.gray_100};
    border-radius: ${RFValue(24)}px;
    margin: 0 ${RFValue(6)}px ${RFValue(6)}px ${RFValue(6)}px;
`;

export const ContainerWrapper = styled.View``;

export const Title = styled.Text`
    text-align: center;
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(16)}px;

`;


export const ContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding:${RFValue(24)}px;
`;

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
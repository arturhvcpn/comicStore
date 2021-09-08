import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

interface IDetailsProps{
    isPrice: 'price' | 'not' | 'description';
}


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;

    margin-top: ${getStatusBarHeight() + RFValue(4)}px;

    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`;

export const Icon = styled(MaterialIcons)`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(24)}px;
    margin-left: ${RFValue(16)};
`;

export const ImageContainer = styled.View`
    flex:1;
    margin-top: ${RFValue(16)}px;
    align-items:center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 80%;
    height: 100%;
`;

export const Footer = styled.View`
    flex:1;
    width: 100%;
    background-color: ${({theme})=> theme.colors.shape};
    border-top-left-radius: ${RFValue(22)};
    border-top-right-radius: ${RFValue(22)};
/*     
    shadow-color:${({theme})=> theme.colors.text_dark};
    shadow-offset: { height: 2};
    shadow-opacity: 0.15;
    shadow-radius: 4;
    elevation: 1; */

`;

export const ContentHeader = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`;

export const ContentDataHeader = styled.View`
    padding: ${RFValue(22)}px ${RFValue(68)}px ${RFValue(22)}px ${RFValue(22)}px;
`;

export const ContentButtonHandbag = styled.View`
    margin-right: ${RFValue(20)};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const Creator = styled.Text`
    margin-top: ${RFValue(6)}px;
    color: ${({theme}) => theme.colors.border_darker};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;

export const ContentDataGeneral = styled.ScrollView`
    flex: 1;
`;

export const ContentDataGeneralStyle = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentDatasStyle = styled.View`
    padding: ${RFValue(14)}px;
    justify-content: center;
    align-items: center;
`;


export const TitleData = styled.Text`
    margin-top: ${RFValue(6)}px;
    color: ${({theme}) => theme.colors.border_darker};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
`;

export const TitleDetailsDataComic = styled.Text<IDetailsProps>`
    color: ${({theme, isPrice}) => isPrice === 'price' ? theme.colors.secondary : theme.colors.text_dark};
    font-family: ${({theme}) =>  theme.fonts.bold};
    font-size: ${({isPrice}) => isPrice === 'description' ? RFValue(16) : RFValue(22)}; 
`;

export const ContentDescription = styled.View`
    margin-left: ${RFValue(12)}px;
    width: 90%;
    
    /* flex-direction: row; */
    /* justify-content: space-between; */
`;

export const Description = styled.Text`
    margin-top: ${RFValue(6)}px;
    color: ${({theme}) => theme.colors.border_darker};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
`;

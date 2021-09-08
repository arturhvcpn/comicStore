import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

export const ImageComicContainer = styled.View`
`;

export const ImageComic = styled.Image`
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({theme})=> theme.colors.text};
`;

export const TitleComic = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.bold};

`;

export const TitlePrice = styled.Text`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;
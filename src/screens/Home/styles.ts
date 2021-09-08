import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { IHomeProps } from '.';

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false,
})`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme})=> theme.colors.secondary_light};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;

    margin-top: ${getStatusBarHeight() + RFValue(16)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View``;

export const MenuButton = styled(BorderlessButton)``;

export const Icon = styled(MaterialIcons)`
    color: ${({theme})=> theme.colors.text_dark};
    font-size: ${RFValue(24)}px;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(24)}px;
`;

export const ContentRare = styled.View`
    flex:1;
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(15)}px;
    margin-left: ${RFPercentage(2)}px;
`;

export const ContentCommon = styled.View`
    flex:1;
    width: 100%;
    margin-top: ${RFPercentage(28)}px;
    margin-left: ${RFPercentage(2)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_dark};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;

export const ListComics = styled(
    FlatList as new () => FlatList<IHomeProps>
    ).attrs({
        flex:1,
        horizontal:true,
        showsHorizontalScrollIndicator:false,
        contentContainerStyle: {
            width: '100%',
            marginTop:RFValue(14),
    },
})``;

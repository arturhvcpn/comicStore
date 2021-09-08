import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';

interface IHighLightButton{
    stateButton: string;
}
export const Container = styled(RectButton)<IHighLightButton>`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background-color: ${({theme, stateButton}) => stateButton === 'active' 
    ? theme.colors.success
    : theme.colors.border_darker
};
    border-radius: ${RFValue(24)}px;
    padding: 18px;
    align-items:center;
    justify-content: center;
`;

export const Icon = styled(Entypo || SimpleLineIcons)`
    font-size:${RFValue(18)}px;
    color: ${({theme})=> theme.colors.shape};
`;

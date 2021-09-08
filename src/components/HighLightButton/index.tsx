import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

export interface IHighLightButtonProps extends RectButtonProps{
  stateButton: 'active' | 'inactive' ;
  icon: string;
  onPress: () => void;
}

export function HighLightButton({ icon, stateButton, onPress, ...rest}: IHighLightButtonProps) {
  return (
      <Container
        activeOpacity={0.1}
        stateButton={stateButton}
        onPress={onPress}
        {...rest}
      >
        <Icon 
          name={icon}
        />
      </Container>
  );
}
 
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Icon } from './styles';

export interface IHandbagButtonProps extends RectButtonProps{
  icon: string;
  onPress: () => void;
}

export function HandbagButton({ icon, onPress, ...rest}: IHandbagButtonProps) {
  return (
      <Container
        activeOpacity={0.1}
        onPress={onPress}
        {...rest}
      >
        <Icon 
          name={icon}
        />
      </Container>
  );
}
 
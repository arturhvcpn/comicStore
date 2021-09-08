import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface IMainButtonProps extends RectButtonProps{
  title: string;
  onPress: () => void;
}

export function MainButton({ title, onPress, ...rest}: IMainButtonProps) {
  return (
      <Container
        onPress={onPress}
        {...rest}
      >
        <Title>{title}</Title>
      </Container>
  );
}
 
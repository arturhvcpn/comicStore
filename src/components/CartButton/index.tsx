import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, ContainerButton } from './styles';

interface ICartButtonProps extends RectButtonProps{
    onPress: () => void;
}

export function CartButton({onPress, ...rest}:ICartButtonProps) {
  return(
      <Container
        activeOpacity={0}
        onPress={onPress}
        {...rest}    
      >
        <ContainerButton>
          <Icon 
            name={'ios-cart-outline'}
          />
          </ContainerButton>
      </Container>
  );
}
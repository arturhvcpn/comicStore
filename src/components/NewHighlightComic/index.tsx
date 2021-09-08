import React, { useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { InfoCard } from '../InfoCard';
import { Container, Header, Footer, Title, ContainerImageContent, ImageContent, ContainerWrapper, ContainerInfo, PageCount, Price, ContainerButton } from './styles';

export interface IHighlightComicsProps{
    id: string;
    title: string;
    thumbnail:{
      path:string;
      extension: string;
    };
    description: string;
    creators: { 
      items:[{
        name: string;
      }]};
    pageCount: number;

    prices: [{
        price: number;
      }];

    textObjects: [{
        language: string;
      }];
    characters: {
      available:number;
    };
    typeComic: 'rare' | 'common';
}

interface IDataHighlightComics extends RectButtonProps{
  data: IHighlightComicsProps;
  onPress: () => void;
}

export function NewHighlightComic({data, onPress, ...rest}:IDataHighlightComics) {
  const [isPressed, setIsPressed] = useState<'active' | 'inactive'>('inactive');
  
  function handleOnPressed(){
    setIsPressed('active');
  }
  
  return (
      <Container
        activeOpacity={0.02}
        onPress={onPress}
        {...rest}
      >
        <Header>
              <Title>{data.title}</Title>
        </Header>
        <ContainerImageContent>
          <ImageContent 
            source={{ uri: data.thumbnail.path + '/portrait_xlarge.' + data.thumbnail.extension}}
          />
        </ContainerImageContent>
        <Footer>
            <InfoCard 
              data={data}
              icon={'plus'}
              stateButton={isPressed}
              onPress={handleOnPressed}
            />
        </Footer>
      </Container>
  );
}

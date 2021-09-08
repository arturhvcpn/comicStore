import React from 'react';
import { IHighlightComicsProps } from '../NewHighlightComic';

import { Container, Title, ImageComicContainer, ImageComic, TitleComic, TitlePrice, Separator } from './styles';

interface IITemCartProps{
    data: IHighlightComicsProps;
}

export function ItemCart({data}:IITemCartProps){
    return(
        <Container>
            <Title>SACOLA</Title>

            <ImageComicContainer>
                <ImageComic 
                    source={{ uri: data.thumbnail.path + '/portrait_xlarge.' + data.thumbnail.extension}}
                /> 
            </ImageComicContainer>
            <TitleComic>{data.title}</TitleComic>
            <TitlePrice>${data.prices[0].price}</TitlePrice>
        </Container>
    );
}
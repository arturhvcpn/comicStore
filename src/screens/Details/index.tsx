import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Icon, Header, ImageContainer, Footer, Image, ContentHeader, Creator, ContentDataHeader, ContentButtonHandbag, ContentDataGeneral, TitleData, ContentDataGeneralStyle, ContentDatasStyle,TitleDetailsDataComic, ContentDescription, Description } from './styles';
import { CartButton } from '../../components/CartButton';
import { HandbagButton } from '../../components/HandbagButton';
import { IHighlightComicsProps } from '../../components/NewHighlightComic';

interface IDetailsProps{
    data:IHighlightComicsProps;
    isPrice: 'price' | 'not' | 'description';
    onPressIconBack: () => void;
    onPressCartButton: () => void;
}

export function Details( {data, isPrice, onPressIconBack, onPressCartButton }:IDetailsProps){
    const navigation = useNavigation();

    function handleNavigateGoBack(){
        navigation.canGoBack();
    }
    function handleNavigateToCart(){
        const stringCarrinho: any = 'Carrinho'
        navigation.navigate(stringCarrinho , {
            screen: 'Cart',
          });
    }
    
    return(
        <Container>
            <Header>
                    <Icon 
                        onPress={onPressIconBack ?? handleNavigateGoBack}
                        name={'arrow-back-ios'}
                    />
                    <CartButton 
                        onPress={onPressCartButton ?? handleNavigateToCart}
                    />
            </Header>
            <ImageContainer>
                <Image source={{
                    uri:data.thumbnail.path + '/portrait_xlarge.' + data.thumbnail.extension ?? 'https://avatars.githubusercontent.com/u/53799608?v=4'} }  />
            </ImageContainer>
            <Footer>
                <ContentHeader>
                    <ContentDataHeader>
                        <Title>{data.title}</Title>
                        <Creator>Autor: {data.creators.items[0].name}</Creator>
                    </ContentDataHeader>
                    <ContentButtonHandbag>
                        <HandbagButton 
                            icon={'handbag'}
                            onPress={() => {}}
                        />
                    </ContentButtonHandbag>
                </ContentHeader>
                <ContentDataGeneral>
                    <ContentDataGeneralStyle>
                        <ContentDatasStyle>
                            <TitleData>Price</TitleData>
                            <TitleDetailsDataComic isPrice={'price'}>${data.prices[0].price}</TitleDetailsDataComic>
                        </ContentDatasStyle>
                        <ContentDatasStyle>
                        <TitleData>Personagens</TitleData>
                            <TitleDetailsDataComic isPrice={'not'}>{data.characters.available}</TitleDetailsDataComic>
                        </ContentDatasStyle>
                        <ContentDatasStyle>
                        <TitleData>Idioma</TitleData>
                            <TitleDetailsDataComic isPrice={'not'}>{data.textObjects[0].language}</TitleDetailsDataComic>
                        </ContentDatasStyle>
                    </ContentDataGeneralStyle>
                    <ContentDescription>
                        <TitleDetailsDataComic isPrice={'description'}>Description</TitleDetailsDataComic>
                        <Description>{data.description}</Description>
                    </ContentDescription>
                </ContentDataGeneral>
            </Footer>
        </Container>
    );
}
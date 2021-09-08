import React, { useState, useEffect} from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Details } from '../Details';
import { NewHighlightComic } from '../../components/NewHighlightComic';
import { IHighlightComicsProps } from '../../components/NewHighlightComic';
import { Container, Header, UserWrapper, UserInfo, Photo, Icon, MenuButton, ListComics, Title, ContentRare, ContentCommon} from './styles';


export interface IHomeProps{
    comic: IHighlightComicsProps;
    id:string;
}

export function Home({}){
    const [isLoading, setLoading] = useState(true);
    const [comic, setComic] = useState<IHighlightComicsProps[]>([]);
    const [openDetails, setOpenDetails] = useState(false);
    
    
    const navigation = useNavigation();
    
    function handleOpenDetails(){
      setOpenDetails(true);

    }
    // function handleNavigateGoBack(){
    //     setOpenDetails(false);
    //     navigation.canGoBack();
    // }
    // function handleNavigateToCart(){
    //     navigation.navigate('Carrinho');
    // }
    useEffect(() => {
        async function getComics() {
        try {
            const response = await fetch('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=43cf4449be961ab47356edbb0105aca2&hash=e7654b468b418a813bf8ff98045fcc21');
            const json = await response.json();

            console.log(json.data);

            setComic(json.data.results);        
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
    
        }
        
        getComics();

    }, []);

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <MenuButton onPress={() =>{}}>
                        <Icon name={'notes'}/>
                    </MenuButton>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/53799608?v=4' }}
                        />
                    </UserInfo>
                </UserWrapper>
            </Header>
            <ContentRare>
                <Title>Rare Comics</Title>

            {isLoading
                ? <ActivityIndicator />
                :
                    <ListComics
                        data={comic}
                        style={{ flex:1}}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <NewHighlightComic data={item} onPress={handleOpenDetails}/>}
                    />
            }
            </ContentRare>
                        
            <ContentCommon>
                <Title>Common Comics</Title>

                {isLoading
                    ? <ActivityIndicator />
                    :
                        <ListComics 
                            data={comic}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <NewHighlightComic data={item} onPress={handleOpenDetails}/>}
                        />
                }
            </ContentCommon>
            <Modal visible={openDetails} >
                <Details
                    data={comic}
                    // onPressCartButton={handleNavigateToCart}
                    // onPressIconBack={handleNavigateGoBack}
                />
            </Modal>
        </Container>
    );
}
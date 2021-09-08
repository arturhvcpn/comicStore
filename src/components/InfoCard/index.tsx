import React from 'react';
import { HighLightButton, IHighLightButtonProps } from '../HighLightButton';
import { IHighlightComicsProps } from '../NewHighlightComic';
import { Container, ContainerWrapper, PageCount, Price, ContainerButton } from './styles';

interface IInfoCardProps extends IHighLightButtonProps {
  icon: string;
  data: IHighlightComicsProps;
  stateButton: 'active' | 'inactive';
  onPress: () => void;
}

export function InfoCard({data, icon, stateButton, onPress}:IInfoCardProps) {  

  return (
      <Container>
              <ContainerWrapper>
                <Price>${data.prices[0].price}</Price>
                <PageCount>{data.pageCount} pages</PageCount>
              </ContainerWrapper>
                <ContainerButton>
                  <HighLightButton 
                    stateButton={stateButton}
                    icon={icon}
                    onPress={onPress}
                  />
              </ContainerButton>
      </Container>
  );
}

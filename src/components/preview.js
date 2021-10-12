import React from 'react';
import styled from 'styled-components';
import Card from './card';

const Preview = ({cards}) => {


    return <Container>
        <TabTitle>Card Preview</TabTitle>
        <Cards>
            {cards.map(card => {
                return <Card key={`card${card.id}`} card={card} />;
            })}
        </Cards>
    </Container>;
};

export default Preview;

const Container = styled.div`
    width: 50%; height: 100%;
    padding: 20px;
    @media ${props => props.theme.tablet}{
        width: 100%;
    }
`;
const TabTitle = styled.h4`
    text-align: center;
    padding: 20px;
    color: navy;
    font-size: 1.5em;
`;
const Cards = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
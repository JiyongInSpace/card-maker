import React from 'react';
import styled from 'styled-components';
import CardAddForm from './card_add_form';
import CardEditForm from './card_edit_form';

const Editor = ({cards, addCard}) => {


    return <Container>
        <TabTitle>Card Maker</TabTitle>
        {cards.map(card => {
            return <CardEditForm key={`editor${card.id}`} card={card} />;
        })}
        <CardAddForm onSubmit={addCard}/>
    </Container>;
};

export default Editor;

const Container = styled.div`
    width: 50%; height: 100%;
    padding: 20px;
    border-right: 1px solid lightsteelblue;
    @media ${props => props.theme.tablet}{
        width: 100%;
        border-right: none;
        border-bottom: 1px solid lightsteelblue;
    }
`;
const TabTitle = styled.h4`
    text-align: center;
    padding: 20px;
    color: navy;
    font-size: 1.5em;
`;
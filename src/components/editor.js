import React from 'react';
import styled from 'styled-components';

const Editor = (props) => {


    return <Container>
        <TabTitle>Card Maker</TabTitle>
    </Container>;
};

export default Editor;

const Container = styled.div`
    width: 50%; height: 100%;
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
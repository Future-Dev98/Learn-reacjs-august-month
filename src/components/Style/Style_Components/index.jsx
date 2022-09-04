import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color || 'green'};
`;

function StyleComponents(props) {
    return (
        <div>
            <Title>Heading</Title>
        </div>
    );
}

export default StyleComponents;
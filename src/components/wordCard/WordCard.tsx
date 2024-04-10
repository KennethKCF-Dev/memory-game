import React from 'react'
import { wordCardProp } from '../../utils/Type'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

export const Card = styled.div<{$isMatch?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1px solid lightgray ;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 10px;
    margin: 10px;
    padding: 5px 10px 5px 10px;
    height: 40px;
    width: 205px;
    font-size: 20px;
    font-wight: 400;
    background-color: ${props => props.$isMatch ? "#bfe9bf": "#fff1d7"};

    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-3px);
    }
`;

const WordCard = ({cardDetail, index}: wordCardProp) => {
    return (
        <Draggable draggableId={cardDetail.id} index={index}>
            {(provided) => {
                return (
                    <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        $isMatch={cardDetail.isMatch}
                    >
                        {cardDetail.word}
                    </Card>
                )
            }}
        </Draggable>
    )
}

export default WordCard
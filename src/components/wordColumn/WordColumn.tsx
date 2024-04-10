import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { wordColumnProp } from '../../utils/Type';
import WordCard from '../wordCard/WordCard';

const WordCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 16px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    height: 100%;
    min-height: 750px;
    margin: 10px;
    background: #fffbe8;
`;

const WordColumn = ({droppableId, wordCardList, gameState}: wordColumnProp) => {
    return (
        <Droppable droppableId={droppableId} isDropDisabled={gameState % 2 === 0}>
            {(provided) => (
                <WordCardContainer
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {wordCardList.map((card, index) => (
                        <WordCard cardDetail={card} index={index} key={card.id} />
                    ))}
                    {provided.placeholder}
                </WordCardContainer>
            )}
        </Droppable>
    )
}

export default WordColumn
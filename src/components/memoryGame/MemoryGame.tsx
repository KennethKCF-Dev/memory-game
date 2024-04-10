import { useState } from 'react'
import { Button, Description, SectionWrapper, GameContainer, Title, SectionContainer, SubTitle, ColumnContainer } from './StyledComponents'
import { englishWordList, frenchWordList, wordPairs } from '../../utils/GameData'
import { nanoid } from 'nanoid'
import { wordSectionObj } from '../../utils/Type';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import WordColumn from '../wordColumn/WordColumn';
import { toast } from 'react-toastify';

const MemoryGame = () => {

    const [gameState, setGameState] = useState(0);
    const [englishSectionData, setEnglishSectionData] = useState<wordSectionObj>({ wordPool: [], ansList: [] });
    const [frenchSectionData, setFrenchSectionData] = useState<wordSectionObj>({ wordPool: [], ansList: [] });

    const startGame = () => {

        setEnglishSectionData({
            wordPool: englishWordList.sort(() => Math.random() - 0.5).map(word => ({ word: word, id: nanoid(), isMatch: false })),
            ansList: []
        })
        setFrenchSectionData({
            wordPool: frenchWordList.sort(() => Math.random() - 0.5).map(word => ({ word: word, id: nanoid(), isMatch: false })),
            ansList: []
        })

        setGameState(gameState + 1);
    }

    const showGrade = () => {
        let index = 0;
        let score = 0;

        while (index < englishSectionData.ansList.length && index < frenchSectionData.ansList.length) {
            const result = wordPairs.get(englishSectionData.ansList[index].word) === frenchSectionData.ansList[index].word;
            if(result){
                englishSectionData.ansList[index].isMatch = true;
                frenchSectionData.ansList[index].isMatch = true;
                score++;
            }
            index++;
        }

        setEnglishSectionData({ ...englishSectionData })
        setFrenchSectionData({ ...frenchSectionData })
        setGameState(gameState + 1)

        let message = "";

        if(score === wordPairs.size){
            message = "Congratulations! All correct."
        }else if(score > wordPairs.size / 2){
            message = `Well done! You scored ${score} points.`
        }else message = `You scored ${score} points. Keep working hard.`

        toast.success(message);
    }

    const onEnglishSectionDragEnd = (event: DropResult) => {
        const { source, destination } = event;

        if (!destination) return;

        const newSectionData = { ...englishSectionData };

        const [remove] = newSectionData[source.droppableId as keyof wordSectionObj].splice(source.index, 1);

        newSectionData[destination.droppableId as keyof wordSectionObj].splice(destination.index, 0, remove);

        setEnglishSectionData(newSectionData)
    }

    const onFrenchSectionDragEnd = (event: DropResult) => {
        const { source, destination } = event;

        if (!destination) return;

        const newSectionData = { ...frenchSectionData };

        const [remove] = newSectionData[source.droppableId as keyof wordSectionObj].splice(source.index, 1);

        newSectionData[destination.droppableId as keyof wordSectionObj].splice(destination.index, 0, remove);

        setFrenchSectionData(newSectionData)
    }

    return (
        <GameContainer>
            <Title>
                English-French Memory Game
            </Title>
            {gameState > 0 ? (
                <>
                    <Description>
                        Instructions:<br/>
                        1. Drag words from the pool to the answer list.<br/>
                        2. Match English words with their French equivalents.<br/>
                        3. After completion, press "GRADE" to see your score!<br/>
                        4. Good luck!<br/>
                    </Description>
                    {gameState % 2 !== 0 ? (
                        <Button onClick={showGrade}>{"GRADE"}</Button>
                    ) : (
                        <Button onClick={startGame}>{"Restart"}</Button>
                    )}
                    <SectionWrapper>
                        <DragDropContext onDragEnd={onEnglishSectionDragEnd}>
                            <SectionContainer>
                                <SubTitle>English</SubTitle>
                                <ColumnContainer>
                                    <WordColumn droppableId="wordPool" wordCardList={englishSectionData.wordPool} gameState={gameState} />
                                    <WordColumn droppableId="ansList" wordCardList={englishSectionData.ansList} gameState={gameState} />
                                </ColumnContainer>
                            </SectionContainer>
                        </DragDropContext>
                        <Title>=</Title>
                        <DragDropContext onDragEnd={onFrenchSectionDragEnd}>
                            <SectionContainer>
                                <SubTitle>French</SubTitle>
                                <ColumnContainer>
                                    <WordColumn droppableId="ansList" wordCardList={frenchSectionData.ansList} gameState={gameState} />
                                    <WordColumn droppableId="wordPool" wordCardList={frenchSectionData.wordPool} gameState={gameState} />
                                </ColumnContainer>
                            </SectionContainer>
                        </DragDropContext>
                    </SectionWrapper>
                </>
            ) : (
                <>
                    <Description>
                        WeWelcome to the English-French Memory Game!<br />
                        Get ready to match English words with their French counterparts.<br />
                        Press "Go!" to begin the challenge!<br />
                    </Description>
                    <Button onClick={startGame}>{"GO!"}</Button>
                </>
            )}
        </GameContainer>
    )
}

export default MemoryGame
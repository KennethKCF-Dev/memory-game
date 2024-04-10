export type cardObj = {
    word: string,
    id: string,
    isMatch: boolean
}

export type wordSectionObj = {
    wordPool: cardObj[],
    ansList: cardObj[]
}

export type wordCardProp = {
    cardDetail: cardObj,
    index: number
}

export type wordColumnProp = {
    droppableId: string,
    wordCardList: cardObj[],
    gameState: number
}
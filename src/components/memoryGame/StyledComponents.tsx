import styled from "styled-components";

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    color: black;
    margin-top: 70px;
`;

export const SubTitle = styled.div`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    color: black;
`;

export const Description = styled.div`
    font-size: 20px;
    margin: 20px 0px 20px 0px;
    max-width: 800px;
    text-align: center;
    color: black;
`;

export const Button = styled.button`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 200px;
    text-align: center;
    padding: 16px 0;
    color: black;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(13.85deg 41.1% 88.74%);
    background: linear-gradient(225deg, hsla(13.85, 41.1%, 88.74%, 1) 0%, hsla(221.54, 55.46%, 93.95%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(13.85, 41.1%, 88.74%, 1) 0%, hsla(221.54, 55.46%, 93.95%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(13.85, 41.1%, 88.74%, 1) 0%, hsla(221.54, 55.46%, 93.95%, 1) 100%);
    box-shadow:  10px 10px 40px #999797;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
        box-shadow:  5px 5px 40px #858585;
        filter: brightness(1);
    };
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    width: 600px;
`
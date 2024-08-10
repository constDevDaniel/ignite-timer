import styled from "styled-components";

export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`






export const BaseCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme.gray100};
    
    
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    
    transition: background-color 0.2s ;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    
`

export const StartCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme.green500};

    &:not(:disabled):hover {
        filter: brightness(0.9);
        background-color: ${props => props.theme.green700};
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme.red500};

    &:not(:disabled):hover {
        filter: brightness(0.9);
        background-color: ${props => props.theme.red700};
    }
`
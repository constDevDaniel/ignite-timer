import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme.gray100};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    user-select: none;
`

const BaseInput = styled.input`
    background: transparent;
    text-align: center;
    height: 3rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme.gray500};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme.gray100};

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme.green500};
    }

    &::placeholder {
        color: ${props => props.theme.gray500};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`
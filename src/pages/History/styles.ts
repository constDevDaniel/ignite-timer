import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3.5rem;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.gray100};
    }
`


export const HistoryList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background-color: ${props => props.theme.gray600};
            color: ${props => props.theme.gray100};
            padding: 1rem;
            text-align: left;
            line-height: 1.6rem;
            font-size: 0.875rem;
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.25rem;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: ${props => props.theme.gray700};
            border-top: 4px solid ${props => props.theme.gray800};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 40%;
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`

const STATUS_COLORS = {
    yellow: 'yellow500',
    green: 'green500',
    red: 'red500'
}

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS; // usando o keyof para pegar as chaves do objeto
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`
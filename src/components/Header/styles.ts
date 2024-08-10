import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 1.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme.gray100};
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: border-bottom 0.2s linear;

            &:hover {
                border-bottom: 3px solid ${props => props.theme.green500};
            }
        }
    }
`
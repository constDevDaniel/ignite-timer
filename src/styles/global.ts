import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
	}

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.green500};
    }

    ::placeholder {
        font: ultra-condensed 1rem "Fira Sans", sans-serif;
    }

	body {
		font-family: 'Roboto', sans-serif;
        background-color: ${props => props.theme.gray900};
        color: ${props => props.theme.gray300};
	}

    body, input, button, textarea {
        font: 400 1rem 'Roboto', sans-serif;
        font-family: 'Roboto', sans-serif;
    }
`;
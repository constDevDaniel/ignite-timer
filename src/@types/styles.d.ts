// codigo de definição de tipos para arquivos .css
// definition types of theme não e necessario decorar ou lembrar
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    //sobreescrevendo o DefaultTheme do styled-components
    //para que ele seja do tipo ThemeType
    export interface DefaultTheme extends ThemeType { }
}
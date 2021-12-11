// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string,
        secondary: string,
        tertiary: string,
        gray: string,
        background: string,
        backgroundLight: string,
        red: string,
        green: string
    };
  }
}
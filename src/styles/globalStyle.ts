import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './transitionStyles';

const GlobalStyle = createGlobalStyle`
    ${Fonts}
    :root {
        --dark-navy: #020c1b;
        --navy: #0a192f;
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #FFFFFF;
        --green: #64FFDA;
        --iron: #dadbde;
        --font-sans: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --fz-xxs: 12px;
        --fz-xs: 14px;
        --fz-sm: 16px;
        --fz-md: 18px;
        --fz-lg: 20px;
        --fz-22: 22px;
        --fz-xl: 24px;
        --fz-xxl: 48px;
        --fz-56: 56px;
        --nav-height: 120px;
        --header-margin-bottom: 48px;
        --header-margin-bottom-mobile: 24px;

        --layout-margin-lr: 150px;
        --layout-margin-lr-tablet: 50px;
        --layout-margin-lr-mobile: 25px;

        --hero-margin: 30px;
        --about-paragraph-spacing: 20px;
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    html {
        box-sizing: border-box;
        width: 100%;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    ::selection {
        background-color: var(--slate);
        color: var(--lightest-slate);
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--navy);
        color: var(--slate);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;
    }

    a {
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;

        &:hover, &:focus {
            color: var(--green);
        }
    }
    ${TransitionStyles}
`;

export default GlobalStyle;

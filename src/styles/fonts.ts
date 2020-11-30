import { css } from 'styled-components';

import InterBlackTTF from '../fonts/Inter-Black-slnt.ttf';
import InterBoldTTF from '../fonts/Inter-Bold-slnt.ttf';
import InterExtraBoldTTF from '../fonts/Inter-ExtraBold-slnt.ttf';
import InterExtraLightTTF from '../fonts/Inter-ExtraLight-slnt.ttf';
import InterLightTTF from '../fonts/Inter-Light-slnt.ttf';
import InterMediumTTF from '../fonts/Inter-Medium-slnt.ttf';
import InterRegularTTF from '../fonts/Inter-Regular-slnt.ttf';
import InterSemiBoldTTF from '../fonts/Inter-SemiBold-slnt.ttf';
import InterThinTTF from '../fonts/Inter-Thin-slnt.ttf';

const Fonts = css`
    @font-face {
        font-family: 'Inter';
        src: url(${InterThinTTF}) format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraLightTTF}) format('truetype');
        font-weight: 200;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterLightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegularTTF}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterMediumTTF}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterSemiBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBoldTTF}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterExtraBoldTTF}) format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: auto;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBlackTTF}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: auto;
    }
`;

export default Fonts;

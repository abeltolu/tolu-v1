import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import IconLogo from './icons/logo';

const Logo = () => {
    return (
        <StWrapper to={'/'}>
            <IconLogo />
        </StWrapper>
    );
};

const StWrapper = styled(Link)`
    width: 48px;
    height: 48px;
    background: var(--white);
    border-radius: 4px;
    padding: 4px;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export default Logo;

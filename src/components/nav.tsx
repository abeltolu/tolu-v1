import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';

const Nav = () => {
    return (
        <StOrderedList>
            {navLinks.map((nav, index) => (
                <StListItem key={index}>
                    <Link to={nav.url}>{nav.name}</Link>
                </StListItem>
            ))}
        </StOrderedList>
    );
};

const StOrderedList = styled.ol`
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const StListItem = styled.li`
    padding: 8px 24px;

    a {
        color: var(--white);
        font-size: var(--fz-sm);
        font-weight: 500;
    }
`;

export default Nav;

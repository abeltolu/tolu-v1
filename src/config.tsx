import React from 'react';
import GithubIcon from './components/icons/github';
import LinkedInIcon from './components/icons/linkedin';
import TwitterIcon from './components/icons/twitter';

export const navLinks = [
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];

export const portfolioLinks = {
    joinder: 'https://www.joinderapp.com/',
    nubitz: 'https://nubitz.io/',
    tofa: 'https://www.tradersofafrica.com/',
    ninepay: 'https://9pay.com.ng/',
    fichaya: 'https://fichaya.com/',
    cib: 'https://www.chicagoinstituteofbusiness.com/',
};

export const socialLinks = [
    {
        name: 'Github',
        href: 'https://github.com/abeltolu',
        icon: <GithubIcon />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/abeltolu',
        icon: <TwitterIcon />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/adetulatolulopeabel/',
        icon: <LinkedInIcon />,
    },
];

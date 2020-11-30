import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { socialLinks } from '../config';
import { deviceMax } from '../styles/theme';

const SocialLink = ({
    index,
    href,
    children,
}: {
    index: number;
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <a
            href={href}
            target="_blank"
            referrerPolicy="no-referrer"
            className="social-link"
            style={{ transitionDelay: `${index * 250}ms` }}
        >
            {children}
        </a>
    );
};

const ContactPage = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        return () => {
            clearTimeout(timeout);
        };
    });
    return (
        <Layout>
            <SEO title="Contact" />
            <StContactPage>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadedown" timeout={2000}>
                            <h1 className="lets-connect">Let's Connect</h1>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <h3 className="desc">
                    Whether its to talk about front end design/development, idea
                    curation and conceptualisation, product development and
                    mangement, my inbox is always open. Feel free to reach out.
                </h3>
                <SocialLinksWrapper>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            socialLinks.map((sl, index) => (
                                <CSSTransition
                                    key={`${sl.name}`}
                                    classNames="fade"
                                    timeout={2000}
                                >
                                    <SocialLink
                                        index={index}
                                        href={sl.href}
                                        children={sl.icon}
                                    />
                                </CSSTransition>
                            ))}
                    </TransitionGroup>
                </SocialLinksWrapper>
                <SayHello
                    href={`mailto:abeltolu@gmail.com?subject=Hey%20Tolu%2C%20let's%20work%20together`}
                >
                    Say Hello
                </SayHello>
            </StContactPage>
        </Layout>
    );
};

const StContactPage = styled.div`
    width: 100%;
    max-width: 50%;
    margin: var(--header-margin-bottom) 0px;
    transition: var(--transition);

    @media ${deviceMax.mobileL} {
        margin: var(--header-margin-bottom-mobile) 0px;
    }

    @media ${deviceMax.tablet} {
        max-width: 100%;
    }

    h1.lets-connect {
        color: var(--white);
        font-weight: 600;
        font-size: var(--fz-xxl);
        line-height: var(--fz-56);
        margin: 0px;
        margin-bottom: var(--hero-margin);

        @media ${deviceMax.mobileL} {
            font-size: 36px;
            line-height: 40px;
        }
    }

    h3.desc {
        color: var(--slate);
        font-weight: 400;
        font-size: var(--fz-md);
        line-height: var(--fz-xl);
        margin: 0px;
        margin-bottom: var(--hero-margin);
    }
`;

const SocialLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--hero-margin);

    .social-link {
        width: 32px;
        height: 32px;
        text-decoration: none;

        svg {
            width: 32px;
            height: 32px;
            fill: var(--slate);

            &:hover {
                fill: var(--green);
            }
        }

        &:not(:last-child) {
            margin-right: 24px;
        }
    }
`;

const SayHello = styled.a`
    color: var(--green);
    font-size: var(--fz-md);
    line-height: var(--fz-22);
    padding: 12px 32px;
    border: 1px solid var(--green);
    border-radius: 4px;
    tet-decoration: none;
    text-transform: uppercase;

    &:hover {
        background-color: var(--dark-navy);
    }
`;

export default ContactPage;

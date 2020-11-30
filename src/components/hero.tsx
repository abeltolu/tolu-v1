import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ProfilePhoto from './profilePhoto';
import { deviceMax } from '../styles/theme';

const Hero = () => {
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
        <StHomePage>
            <Content>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadedown" timeout={2000}>
                            <ProfilePhoto size={175} />
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadedown" timeout={2000}>
                            <h1>Hi, I'm Tolulope Adetula</h1>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadeup" timeout={2000}>
                            <h2>
                                Build quality software for top businesses around
                                the globe
                            </h2>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadedown" timeout={2000}>
                            <h3>
                                An experienced{' '}
                                <span className="highlight-green">
                                    Software Engineer
                                </span>{' '}
                                based in Lagos, Nigeria. I specialize in{' '}
                                <span className="highlight-green">
                                    Front End
                                </span>
                                ,{' '}
                                <span className="highlight-green">
                                    Product Development
                                </span>{' '}
                                and{' '}
                                <span className="highlight-green">
                                    Management
                                </span>
                                . I've got passion for all things visual and
                                fluid with a strong architecture.
                            </h3>
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fadeup" timeout={2000}>
                            <Link to="/contact" className="connect">
                                Connect with me
                            </Link>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </Content>
        </StHomePage>
    );
};

const StHomePage = styled.div`
    /*margin-top: var(--header-margin-bottom);*/
`;

const Content = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: var(--transition);

    h1 {
        color: var(--white);
        font-weight: 500;
        font-size: var(--fz-md);
        line-height: var(--fz-xl);
        margin: var(--hero-margin) 0px;
    }

    h2 {
        color: var(--white);
        font-weight: 600;
        font-size: var(--fz-xxl);
        line-height: var(--fz-56);
        margin: 0px;
        margin-bottom: var(--hero-margin);
        text-align: center;

        @media ${deviceMax.mobileL} {
            font-size: 36px;
            line-height: 40px;
        }
    }

    h3 {
        color: var(--slate);
        font-weight: 400;
        font-size: var(--fz-sm);
        line-height: var(--fz-xl);
        margin: 0px;
        margin-bottom: var(--hero-margin);
        text-align: center;
        max-width: 550px;

        span.highlight-green {
            color: var(--green);
        }
    }

    a.connect {
        color: var(--navy);
        font-weight: 500;
        font-size: var(--fz-md);
        line-height: var(--fz-22);
        padding: 24px 38px;
        background: var(--white);
        border: 1px solid var(--white);
        border-radius: 85px;
        text-decoration: none;
        text-transform: uppercase;
        margin-bottom: var(--hero-margin);

        &:hover {
            background: var(--iron);
            border-color: var(--iron);
        }

        @media ${deviceMax.mobileL} {
            padding: 12px 16px;
            font-size: 14px;
            line-height: 20px;
        }
    }
`;

export default Hero;

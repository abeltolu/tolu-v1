import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Layout from '../components/layout';
import ProfilePhoto from '../components/profilePhoto';
import SEO from '../components/seo';
import { portfolioLinks } from '../config';
import { deviceMax } from '../styles/theme';

const FolioLink = ({ title, href }: { title: string; href: string }) => {
    return (
        <Link
            to={href}
            referrerPolicy="no-referrer"
            target="_blank"
            className="link-green"
        >
            {title}
        </Link>
    );
};

const AboutPage = () => {
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
            <SEO title="About" />
            <StAboutPage>
                <Content>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames="fadedown" timeout={2000}>
                                <WelcomeIntro>
                                    <ProfilePhoto size={64} />
                                    <span className="welcome-name">
                                        Tolulope Adetula
                                    </span>
                                </WelcomeIntro>
                            </CSSTransition>
                        )}
                    </TransitionGroup>

                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames="fadeup" timeout={2000}>
                                <Details>
                                    <p>
                                        I'm a Software Engineer based in Lagos,
                                        Nigeria, with specialty in Front End,
                                        Product Development and Management. I've
                                        got passion for all things visual and
                                        fluid with a strong architecture.{' '}
                                    </p>
                                    <p>
                                        I enjoy building rich and interactive
                                        user experience on Web and Mobile. With
                                        over 7 years of SaaS and Enterprise
                                        product design experience, I understand
                                        the connections between strategy,
                                        development teams, and business goals.
                                    </p>
                                    <p>
                                        Currently, I work with the awesome team
                                        at{' '}
                                        <FolioLink
                                            href={portfolioLinks.joinder}
                                            title="Joinder LLC"
                                        />{' '}
                                        as the Senior Technical Consultant
                                        (Front End). Prior to that, I worked as
                                        a Senior Software Engineer & Technical
                                        Consultant building awesome products for
                                        various startups in Europe & USA.
                                    </p>
                                    <p>
                                        Additionally, I’ve helped build products
                                        for{' '}
                                        <FolioLink
                                            href={portfolioLinks.nubitz}
                                            title="Nubitz"
                                        />
                                        ,{' '}
                                        <FolioLink
                                            href={portfolioLinks.tofa}
                                            title="Traders of Africa"
                                        />
                                        ,{' '}
                                        <FolioLink
                                            href={portfolioLinks.ninepay}
                                            title="9pay"
                                        />
                                        ,{' '}
                                        <FolioLink
                                            href={portfolioLinks.fichaya}
                                            title="Fichaya"
                                        />
                                        , and{' '}
                                        <FolioLink
                                            href={portfolioLinks.cib}
                                            title="Chicago Institute of Business"
                                        />
                                        .
                                    </p>
                                    <p>
                                        Here are a few technologies I have
                                        worked with recently:
                                    </p>
                                    <p>
                                        <ol className="skills">
                                            <li>
                                                <span className="highlight-green">
                                                    Front End:
                                                </span>{' '}
                                                Javascript, TypeScript (React,
                                                Native, Vue, Angular),
                                            </li>
                                            <li>
                                                <span className="highlight-green">
                                                    Backend and Web APIs:
                                                </span>{' '}
                                                Node.js (Express), PHP (Laravel
                                                and CakePHP)
                                            </li>
                                            <li>
                                                <span className="highlight-green">
                                                    Testing:
                                                </span>{' '}
                                                Jest, Mocha, Enzyme, Cypress
                                            </li>
                                            <li>
                                                <span className="highlight-green">
                                                    Design & Prototyping:
                                                </span>{' '}
                                                Sketch, Balsamiq and Figma
                                            </li>
                                            <li>
                                                <span className="highlight-green">
                                                    Serverless/Platforms:
                                                </span>{' '}
                                                Git, Fastlane, Heroku, Firebase,
                                                AWS, Azure, and Docker
                                            </li>
                                        </ol>
                                    </p>
                                </Details>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </Content>
            </StAboutPage>
        </Layout>
    );
};

const StAboutPage = styled.div`
    margin: var(--header-margin-bottom) 0px;

    @media ${deviceMax.mobileL} {
        margin: var(--header-margin-bottom-mobile) 0px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: 75%;

    @media ${deviceMax.tablet} {
        max-width: 100%;
    }
`;

const WelcomeIntro = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--hero-margin);

    span.welcome-name {
        margin-left: 16px;
        color: var(--white);
        font-weight: 500;
        font-size: var(--fz-md);
        line-height: var(--fz-xl);
    }
`;

const Details = styled.div`
    display: block;
    width: 100%;

    p {
        margin: 0px;
        padding: 0px;
        color: var(--white);
        font-weightz: 400;
        font-size: var(--fz-md);
        line-height: var(--fz-xl);
        margin-bottom: var(--about-paragraph-spacing);

        a.link-green {
            text-decoration: none;
            color: var(--green);

            &:hover {
                font-weight: 500;
            }
        }

        span.highlight-green {
            color: var(--green);
        }

        ol.skills {
            margin: 0px;
            padding: 0px;
            list-style: none;
            display: flex;
            flex-direction: column;

            li {
                margin-bottom: 2px;
            }
        }
    }
`;

export default AboutPage;

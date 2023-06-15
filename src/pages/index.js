import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop'
import ReactGA from 'react-ga4'

import SEO from '../components/seo'

import githubLogo from '../images/github.svg'
import skejtparkyLogo from '../images/skatespoty.svg'
import dailyNinjaLogo from '../images/dailyninja.svg'
import cesivNHLLogo from '../images/cesivnhl.svg'

import reactLogo from '../images/react.svg'
import sassLogo from '../images/sass.svg'
import firebaseLogo from '../images/firebase.svg'
import nextLogo from '../images/nextjs.svg'
import tsLogo from '../images/typescript.svg'
import gitlabLogo from '../images/gitlab.svg'
import vercelLogo from '../images/vercel.svg'

import surfImg from '../images/surf.svg'
import GitHubGraph from '../components/GitHubGraph'
import './index.scss'

const INTERVAL = 2800

const IndexPage = () => (
    <div className="martinjuzl">
        <SEO
            title="Martin Juzl | Front-end Engineer"
            keywords={['Martin', 'Juzl', 'front-end', 'engineer', 'developer', 'typescript', 'react']}
        />

        <section className="intro">
            <div className="container">
                <h1>
                    Hi!&nbsp;I'm&nbsp;<b>Martin</b>,{' '}
                    <br className="mobile" />
                    front-end&nbsp;engineer{' '}
                    <br className="mobile" />
                    based&nbsp;in&nbsp;
                    <a
                        href="https://www.google.com/maps/place/Brno/@49.2022097,16.4378777,11z"
                        target="_blank"
                        onClick={() =>
                            ReactGA.event({
                                category: 'User',
                                action: 'Clicked on location Brno'
                            })
                        }
                    >
                        Brno <i className="fa fa-map-marker" />
                    </a>
                    .
                </h1>
            </div>
        </section>

        <Fade bottom>
            <section className="stack">
                <h2 className="text">
                    <span>My favorite technologies are</span>
                    <br className="mobile" />
                    <TextLoop
                        interval={INTERVAL}
                        springConfig={{ stiffness: 90 }}
                        className="loop"
                        children={[
                            'TypeScript + React + SASS',
                            'NextJS + Vercel',
                            'Gitlab CI/CD, Firebase',
                        ]}
                    />
                </h2>
                <h2 className="logos">
                    <TextLoop interval={INTERVAL} springConfig={{ stiffness: 90 }} className="loop">
                        <div className="logo">
                            <img src={tsLogo} alt="TypeScript" />
                            <img src={reactLogo} alt="React" />
                            <img src={sassLogo} alt="SASS" />
                        </div>
                        <div className="logo">
                            <img src={nextLogo} alt="NextJS" />
                            <img src={vercelLogo} alt="Vercel" />
                        </div>
                        <div className="logo">
                            <img src={gitlabLogo} alt="Gitlab CI/CD" />
                            <img src={firebaseLogo} alt="Firebase" />
                        </div>
                    </TextLoop>
                </h2>
            </section>
        </Fade>

        <Fade bottom>
            <section className="open-source">
                <div className="inner">
                    <div className="logo">
                        <img src={githubLogo} alt="GitHub" />
                    </div>
                    <div className="desc">
                        <h2>
                            <a
                                href="https://github.com/martyan"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on GitHub profile'
                                    })
                                }
                            >
                                github.com/<b>martyan</b>
                            </a>
                        </h2>

                        <GitHubGraph />

                        <p>
                            <a
                                href="https://github.com/martyan/react-customizable-progressbar"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-customizable-progressbar'
                                    })
                                }
                            >
                                react-customizable-progressbar
                            </a>{' '}
                            <span className="subtext">
                                <span className="middot">&middot;</span>{' '}
                                check{' '}
                                <Link
                                    to="/react-customizable-progressbar"
                                    onClick={() =>
                                        ReactGA.event({
                                            category: 'User',
                                            action: 'Clicked on react-customizable-progressbar examples'
                                        })
                                    }
                                >
                                    examples
                                </Link>{' '}
                                or play around with{' '}
                                <Link
                                    to="/react-customizable-progressbar/generator"
                                    onClick={() =>
                                        ReactGA.event({
                                            category: 'User',
                                            action: 'Clicked on react-customizable-progressbar generator'
                                        })
                                    }
                                >
                                    generator
                                </Link>
                            </span>
                        </p>

                        <p>
                            <a
                                href="https://github.com/martyan/react-surfer-slider"
                                target="_blank"
                                onClick={() =>
                                    ReactGA.event({
                                        category: 'User',
                                        action: 'Clicked on react-surfer-slider'
                                    })
                                }
                            >
                                react-surfer-slider
                            </a>{' '}
                            <span className="subtext">
                                <span className="middot">&middot;</span>{' '}
                                see{' '}
                                <Link
                                    to="/react-surfer-slider"
                                    onClick={() =>
                                        ReactGA.event({
                                            category: 'User',
                                            action: 'Clicked on react-surfer-slider examples'
                                        })
                                    }
                                >
                                    examples
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="skejtparky">
                <a
                    className="logo"
                    href="https://skatespoty.cz"
                    target="_blank"
                    onClick={() =>
                        ReactGA.event({
                            category: 'User',
                            action: 'Clicked on Skejtparky'
                        })
                    }
                >
                    <img src={skejtparkyLogo} alt="Skatespoty" />
                </a>
                <div className="desc">
                    <p>
                        Find&nbsp;skateparks,&nbsp;pumptracks&nbsp;and{' '}
                        street&nbsp;spots&nbsp;in&nbsp;your&nbsp;area
                    </p>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="daily-ninja">
                <div className="inner">
                    <a
                        className="logo"
                        href="https://daily-ninja.com"
                        target="_blank"
                        onClick={() =>
                            ReactGA.event({
                                category: 'User',
                                action: 'Clicked on Daily Ninja'
                            })
                        }
                    >
                        <img src={dailyNinjaLogo} alt="Daily Ninja" />
                    </a>
                    <div className="desc">
                        <p>Fresh slices of news every day</p>
                    </div>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="nhlgram">
                <a
                    className="logo"
                    href="https://cesivnhl.cz"
                    target="_blank"
                    onClick={() =>
                        ReactGA.event({
                            category: 'User',
                            action: 'Clicked on Češi v NHL'
                        })
                    }
                >
                    <img src={cesivNHLLogo} alt="Češi v NHL" />
                </a>
                <div className="desc">
                    <p>Video&nbsp;highlights, stats&nbsp;and&nbsp;rankings of Czech&nbsp;players&nbsp;in&nbsp;NHL</p>
                </div>
            </section>
        </Fade>

        <Fade bottom>
            <section className="get-in-touch">
                <div className="linked-in">
                    <div className="text">
                        If&nbsp;you&nbsp;want&nbsp;to&nbsp;see&nbsp;my{' '}
                        professional&nbsp;working&nbsp;experience,<br />
                        you can do so on my
                    </div>
                    <button className="cta">
                        <a
                            href="https://www.linkedin.com/in/mjuzl/"
                            target="_blank"
                            onClick={() =>
                                ReactGA.event({
                                    category: 'User',
                                    action: 'Clicked on Linked-in profile'
                                })
                            }
                        >
                            <i className="fa fa-linkedin" /> Linked-in profile
                        </a>
                    </button>
                </div>

                <div className="epilogue">
                    <div className="board">
                        <img src={surfImg} alt="Surf" />
                    </div>

                    <div className="author">
                    </div>
                </div>
            </section>
        </Fade>
    </div>
)

export default IndexPage

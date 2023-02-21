/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactGA from 'react-ga4'

export const onClientEntry = () => {
    ReactGA.initialize('G-4GW3LRZ67W')
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
}

export const onRouteUpdate = ({ location, prevLocation }) => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
}

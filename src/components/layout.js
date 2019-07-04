/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Archive from './archive';
import './layout.css';

const MainLayout = styled.main`
  max-width: 90vw;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            author
          }
        }
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 500 }}
          to={{ height: location.pathname === '/' ? 500 : 100 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        {/* {location.pathname === '/' && (
          
        )} */}
        <MainLayout>
          <main>
            <p>
              This extremly fast site was built by the amazing &nbsp;
              <a href={'https://twitter.com/' + data.site.siteMetadata.author}>
                {data.site.siteMetadata.author}
              </a>
            </p>
            {children}
          </main>
          <Archive />
        </MainLayout>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <p>{data.site.siteMetadata.tagline}</p>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {
  location: {},
};

export default Layout;

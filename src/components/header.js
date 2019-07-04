import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import siteLogo from '../images/mui-logo.png';

const HeaderWrapper = styled.div`
  background: #524763;
  a {
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`;
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <header>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <img
              style={{
                width: '50px',
              }}
              src={siteLogo}
              alt="Gatsby Logo and Stuff"
            />
          </Link>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {/* {siteTitle} */}
          </Link>
        </h1>
      </HeaderContainer>
    </header>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

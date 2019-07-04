import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radious: 4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p.date {
    color: #888;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

const LISTING_QUERY = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "dddd, MMMM Do YYYY")
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Post key={edge.node.id}>
          <Link to={`/posts${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>

          <p class="date">{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link class="read-more" to={`/posts${edge.node.frontmatter.slug}`}>
            Read More...
          </Link>
        </Post>
      ))
    }
  />
);

export default Listing;

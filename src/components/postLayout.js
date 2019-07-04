import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query SinglePost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

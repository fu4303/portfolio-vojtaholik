import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ProjectLayout from '../components/project-layout'
import { bpMinLG } from '../utils/breakpoints'
import Link from '../components/link'

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.mdx
    return (
      <ProjectLayout>
        <h1
          css={css`
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
            ${bpMinLG} {
              ${project.frontmatter.title && 'margin-top: -10px;'}
            }
            margin-top: 20px;
          `}>
          <Link to={`/${project.fields.collection}`}>
            {project.fields.collection}
          </Link>{' '}
          / {project.frontmatter.title && project.frontmatter.title}
        </h1>
        <MDXRenderer>{project.code.body}</MDXRenderer>
      </ProjectLayout>
    )
  }
}

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      fields {
        collection
      }
      code {
        body
      }
    }
  }
`

export default ProjectTemplate

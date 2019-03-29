import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/tag'
import mdxComponents from './mdx'

const Heading = styled('h2')({
  borderRadius: '5px 5px 0 0',
  fontWeight: '400',
  textTransform: 'uppercase',
  zIndex: '999',
  position: 'absolute',
  marginTop: '-28px',
  color: 'hsla(0, 0%, 0%, 0.6)',
  padding: '8px',
  background: 'white',
  borderTop: '1px solid #f1f1f1',
  borderLeft: '1px solid #f1f1f1',
  borderRight: '1px solid #f1f1f1',
  fontSize: '12px',
  lineHeight: '1',
})

export default class CodeWithExample extends React.Component {
  render() {
    const { children = [] } = this.props
    return (
      <div>
        <div
          css={css({
            pre: {
              paddingBottom: '50px !important',
            },
          })}>
          <MDXProvider components={mdxComponents}>{children[0]}</MDXProvider>
        </div>
        <div
          css={css({
            marginTop: '-30px',
            pre: {
              borderTop: '1px solid #f1f1f1',
              borderRight: '1px solid #f1f1f1',
              borderLeft: '1px solid #f1f1f1',
              borderRadius: '0 5px 5px 5px',
              background: '#fff !important',
              //zIndex: '999',
              position: 'relative',
            },
          })}>
          <Heading>example</Heading>
          <MDXProvider components={mdxComponents}>{children[1]}</MDXProvider>
        </div>
      </div>
    )
  }
}

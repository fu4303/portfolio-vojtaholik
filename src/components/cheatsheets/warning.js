import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/tag'
import mdxComponents from '../mdx'

const WarningStyled = styled.div({
  background: '#FBF4F3',
  padding: '10px 15px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
  color: '#B4261A',
  p: {
    fontFamily: 'monospace',
    margin: 0,
    color: '#B4261A',
    fontSize: '90%',
  },
  span: {
    fontSize: '20px',
    marginRight: '10px',
  },
})

export default class Warning extends React.Component {
  render() {
    const { children } = this.props
    return (
      <WarningStyled>
        <span>!</span> {children}
      </WarningStyled>
    )
  }
}

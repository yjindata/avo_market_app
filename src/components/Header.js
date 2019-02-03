import React, { Component } from 'react'
import styled from 'styled-components'

const Welcome = styled.h1`
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: center;
`

export default class Header extends Component {
  render() {
    return (
      <div>
        <Welcome>
        <h1>Welcome msg</h1>
        </Welcome>
      </div>
    )
  }
}

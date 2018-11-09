import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profilepic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Patrick Thompson`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Patrick Thompson</strong>, a developer with a knack
          for learning.{' '}
          <a href="https://twitter.com/yourAverageCode">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

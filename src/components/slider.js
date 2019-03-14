import React from 'react'
import '@brainhubeu/react-carousel/lib/style.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

export default class Slider extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 }
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({ value })
  }

  render() {
    const { children = [] } = this.props
    return (
      <div>
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          slides={children}
          arrows
          clickToChange
        />
      </div>
    )
  }
}

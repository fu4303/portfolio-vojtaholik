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
    const { children, slides = [], slide1, slide2, slide3, slide4 } = this.props
    const newArr = Array.from({ children })
    const child = React.Children.toArray(this.props.children)
    return (
      <div>
        {console.log(child)}
        <Carousel
          value={this.state.value}
          onChange={this.onChange}
          //   slides={newArr.map(item => (
          //     <div>{item}</div>
          //   ))}
          // slides={[
          //   <div>{slide1}</div>,
          //   <div>{slide2}</div>,
          //   <div>{slide3}</div>,
          //   <div>{slide4}</div>,
          // ]}

          slides={slides}
          //slides={[<div>{children}</div>, 'meow2']}
          //slides={[<div>{slide1}</div>, <div>{slide2}</div>, <div>three</div>]}
          //slides={['hey', 'two', 'three']}
          arrows
          clickToChange
        />
      </div>
    )
  }
}

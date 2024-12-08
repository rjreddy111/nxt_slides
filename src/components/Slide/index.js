import {Component} from 'react'

import SliderContext from '../../Context/index'

import './index.css'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickDesciption = () => {
    this.setState({descriptionActive: false})
  }

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <SliderContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }
          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }
          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-background-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading}>{heading}</h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                  />
                )}
                {descriptionActive ? (
                  <p onClick={this.onClickDesciption}>{description}</p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slide

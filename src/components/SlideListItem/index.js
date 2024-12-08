import {Component} from 'react'

import SliderContext from '../../Context/index'

import './index.css'

class SlideListItem extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details

    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList, activeIndex, changeActiveTab} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyling = isActive ? 'active-style' : ''
          const inClickSlideCard = () => {
            changeActiveTab(serialNumber - 1)
          }
          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              testid={`slideTab${serialNumber}`}
              onClick={inClickSlideCard}
            >
              <p>{serialNumber}</p>
              <div className="slider-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default SlideListItem

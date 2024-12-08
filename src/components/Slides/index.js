import {Component} from 'react'
import SliderContext from '../../Context'
import Slide from '../Slide'

import SlideListItem from '../SlideListItem'

import './index.css'

class Slides extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-contaienr">
              <ol className="list-style">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slides

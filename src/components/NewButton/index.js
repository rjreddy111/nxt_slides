import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import SliderContext from '../../Context/index'

import './index.css'

const NewButton = () => (
  <SliderContext.Consumer>
    {value => {
      const {activeIndex, addNewItem, changeActiveTab} = value
      const onClickAddButon = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <div>
          <button type="button" onClick={onClickAddButon}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SliderContext.Consumer>
)

export default NewButton

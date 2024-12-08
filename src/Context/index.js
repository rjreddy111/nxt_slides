import React from 'react'

const SliderContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SliderContext

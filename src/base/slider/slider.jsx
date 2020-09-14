

import React, { useState, useEffect } from 'react'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import './slider.styl'
BScroll.use(Slide)

export const Slider = (props) => {

  const [slider, setSlider] = useState(null)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  const initSlider = () => {
    let sliderWrapper = new BScroll('.slider', {
      scrollX: true,
      scrollY: false,
      slide: true,
    })
  
    setSlider(sliderWrapper)
  }


  useEffect(() => {

    if (props.sliderList.length && !slider) {
      initSlider()
    }

    if (slider) {

      slider.on('slideWillChange', (page) => {
        setCurrentPageIndex(page.pageX)
      })

      return function cleanup() {
        slider.destroy()
      }
    }

  }, [props.sliderList, slider])

  return (
    <div className="slider" >
      <div className="slider-group">
        {
          props.sliderList.map((item, key) => {
            return (
              <div key={key} className="slider-item">
                <span>
                  <img src={item.picUrl} alt="" />
                </span>
              </div>
            )
          })
        }
      </div>
      <div className="dots">
        {
          props.sliderList.map((item, key) => {
            return (
              <span key={key} className={`dot ${currentPageIndex === key ? 'active' : ''}`}></span>
            )
          })
        }
      </div>
    </div>
  )
}

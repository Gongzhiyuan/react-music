import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll'


const Scroll = (props) => {
  const [scroll, setScroll] = useState(null)

  const getScrollData = useCallback(
    (page) => {
      props.onScroll(page.y)
    }, [props]
  );

  useEffect(() => {
    if (props.children.length && !scroll) {
      let scroll = new BScroll('.scroll', {
        propTypes:1,
      })
      scroll.scrollTo(0,props.scrollTop,0)
      setScroll(scroll)
    }

    if (scroll) {
      scroll.refresh()
      scroll.on('scrollEnd', getScrollData)
      return function cleanup() {
        scroll.off('scrollEnd', getScrollData)
      }
    }

  }, [props.children.length, scroll, getScrollData, props.scrollTop])


  return (
    <div className={`scroll ${props.className}`}>
      <div>{props.children}</div>
    </div >
  )
}


Scroll.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
};


export default Scroll

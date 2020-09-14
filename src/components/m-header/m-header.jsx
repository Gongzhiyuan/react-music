
import React from 'react'
import { useHistory } from 'react-router-dom'
import "./m-header.styl"

export const Mheader = () => {
  const history = useHistory();
  return (
    <div className="m-header">
      <div className="icon"></div>
      <h1 className="text">Chicken Music</h1>
      <div className="mine" onClick={() => history.push('/user')}>
        <i className="icon-mine"></i>
      </div>
    </div>
  )
}


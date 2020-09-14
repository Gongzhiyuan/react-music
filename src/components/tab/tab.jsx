

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './tab.styl'


export const Tab = () => {
  const linksType = [
    {
      link: "/recommend",
      name: "推荐"
    },
    {
      link: "/singer",
      name: "歌手"
    },
    {
      link: "/rank",
      name: "排行"
    },
    {
      link: "/search",
      name: "搜索"
    },
  ]
  const location = useLocation()
  return (
    <div className="tab">
      {
        linksType.map((item, key) => {
          return (
            <Link key={key} className={`tab-item ${location.pathname === item.link ? 'router-link-active' : ''}`} to={item.link}>
              <span className="tab-link" >{item.name}</span>
            </Link >
          )
        })
      }
    </div >
  )
}

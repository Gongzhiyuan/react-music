
import React from 'react'
import Scroll from '../../base/scroll/scroll'
import { Slider } from '../../base/slider/slider'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import './recommend.styl'


export class Recommend extends React.Component {
  componentDidMount() {
    const { banner, listView } = this.props
    if (!banner.length && !listView.length) {
      this.props.listViewAction()
      this.props.bannerAction()
    }
  }


  onScroll = (page) => {
    this.props.locationActions({
      scrollTop:page,
      indexCurrpage: 0
    })
  }

  render() {
    const { banner, listView,location } = this.props
    return (
      <div className="recommend">
        <Scroll className="recommend-content" onScroll={this.onScroll} scrollTop={location.scrollTop}>
          <Slider sliderList={banner} ></Slider>
          <div className="recommend-list">
            <h1 className="list-title">热门歌单推荐</h1>
            <ul>
              {
                listView.map(item => {
                  return (
                    <li key={item.dissid} className="item">
                      <div className="icon">
                        <img width="60" height="60" src={item.imgurl} alt="" />
                      </div>
                      <div className="text">
                        <h2 className="name">{item.creator.name}</h2>
                        <p className="desc">{item.dissname}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </Scroll>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  banner: state.recommend.banner,
  listView: state.recommend.listView,
  location: state.recommend.locations,
})

const mapDispatchToProps = {
  bannerAction: (params) => actions.bannerAction(params),
  listViewAction: (params) => actions.listViewAction(params),
  locationActions: (params) => actions.locationAction(params),
}



export default connect(mapStateToProps, mapDispatchToProps)(Recommend)




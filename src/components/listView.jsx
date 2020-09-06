

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showListView } from '../store/actions/list-view-action'

export class listView extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }


  componentDidMount() {
    const params = {
      name: 123
    }
    this.props.clickFun(params)

  }
  render() {


    return (
      <div>
        {/* <button onClick={this.props.clickFun}></button> */}
        <ul>
          {
            this.props.list.map(item => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer
})

const mapDispatchToProps = {
  clickFun: (params) => showListView(params)
}




export default connect(mapStateToProps, mapDispatchToProps)(listView)

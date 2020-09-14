
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Rank extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div>
        Rank
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listReducer: state.listReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rank)




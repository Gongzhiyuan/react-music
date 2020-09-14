import React, { Component } from 'react';
import PropTypes from 'prop-types';


class test extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.refs.div)
  }
  onCopyEvent = (e) => {
    this.forceUpdate(()=>{
      console.log(123123)
    })
    console.log(e.clipboardData)
  }

  render() {
    return (
      <div>
        <input
          //  onKeyDown={this.onCopyEvent} 
          type="text" onCut={this.onCopyEvent} onPaste={this.onCopyEvent} onCopy={this.onCopyEvent} />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

test.propTypes = {
  title: PropTypes.string
};

export default test;
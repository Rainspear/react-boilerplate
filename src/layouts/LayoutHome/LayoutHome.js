import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class LayoutHome extends Component {


  render() {
    return (
      <>
        <header></header>
        <main>
          {this.props.children}
        </main>
        <footer></footer>
      </>
    )
  }
}

export default LayoutHome

import React from 'react'

import classes from './Modal.module.scss'
import Backdrop from 'components/UI/Backdrop/Backdrop'
import PropTypes from 'prop-types'

const modal = (props) => {
  const {
    width,
    height,
    show,
    modalClosed,
  } = props
  return <>
    <Backdrop show={show} clicked={modalClosed} />
    <div className={classes.Modal} style={{
      transform: show ? "translate(-50%, -50%)" : "translate(-50%, -200%)",
      left: show ? '50%' : '50%',
      top: show ? '50%' : '50%',
      opacity: show ? '1' : '0',
      zIndex: show ? '9999' : '-1',
      width: width,
      height: height,
    }}>
      {props.children}
    </div>
  </>
}


modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  show: PropTypes.bool,
  modalClosed: PropTypes.func
}

modal.defaultProps = {
  width: '35rem',
  height: '15.5rem',
  show: false,
}

export default modal
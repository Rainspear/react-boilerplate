import React from 'react'

import FocusTrap from "focus-trap-react";

import classes from './Modal.module.scss'
import Backdrop from 'components/UI/Backdrop/Backdrop'
import PropTypes from 'prop-types'


const modal = (props) => {
  const {
    width,
    height,
    show,
    modalClosed,
    className : classname
  } = props
  return <FocusTrap
    focusTrapOptions={{
      initialFocus: props.autoFocus ? this.props.autoFocus : false,
      clickOutsideDeactivates: true,
    }}
  >
    <div className={classes.ModalFrame}>
      <Backdrop show={show} clicked={modalClosed} />
      <div className={[classes.Modal, classname].join(" ")} style={{
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
    </div>
  </FocusTrap>
}


modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
  classname : PropTypes.string
}

modal.defaultProps = {
  width: '35rem',
  height: '20rem',
  show: false,
  classname : ""
}

export default modal
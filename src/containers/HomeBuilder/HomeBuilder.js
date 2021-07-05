import React, { Component } from 'react'
// redux
import { connect } from "react-redux";
import { compose } from "redux";
import { homeActions } from "redux/actions";
import { createStructuredSelector } from "reselect";
import {

} from "redux/selectors";
// style
import classes from './HomeBuilder.module.scss';
// components
import Timeline from 'components/Timeline/Timeline';
import Modal from "components/UI/Modal/Modal"
class HomeBuilder extends Component {

  state = {
    confirmPopup: true
  }

  toggleConfirmHandler = (active) => {
    this.setState({ confirmPopup: active })
  }

  componentDidMount() {
    this.props.getHomeInfomation();
  }

  render() {
    const { confirmPopup } = this.state;
    return (
      <div className={classes.Background}>
        <h2>Welcome to Animation Boilerplate</h2>
        <Timeline />
        <Modal
          modalClosed={() => this.toggleConfirmHandler(false)}
          show={confirmPopup}
          className={classes.Popup}
        >
          Cookie Accept
          <br/>
          <button onClick={() => this.toggleConfirmHandler(false)}>OK</button>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({

});
export const mapDispatchToProps = (dispatch) => {
  return {
    getHomeInfomation: () => dispatch(homeActions.getHomeInfomation())
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeBuilder)

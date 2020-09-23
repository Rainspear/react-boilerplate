import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// Redux
import { connect } from "react-redux";
import { compose } from "redux";
import { homeActions } from "redux/actions";
import { createStructuredSelector } from "reselect";
import {

} from "redux/selectors";
import classes from './HomeBuilder.module.scss';
class HomeBuilder extends Component {


  componentDidMount() {
    this.props.getHomeInfomation();
  }

  render() {
    return (
      <div className={classes.Background}>
        <h2>Welcome to Animation Boilerplate</h2>
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

import React from 'react';
import PropTypes from 'prop-types';
import classes from "./RadioBox.module.scss"
// import "./RadioBox.scss";

const RadioBox = props => {
  const { label, name, value, checked, changed, clicked } = props;

  const clickCheckmarkHandler = (e) => {
    if (clicked !== undefined) {
      clicked(e);
    }
  }

  return (
    <div className={classes.RadioBox}>
      <label className={classes.container} onClick={clickCheckmarkHandler}>
        <div className={classes.label}>{label}</div>
        <input
          type="radio"
          checked={checked}
          name={name}
          value={value}
          onChange={changed}
          onClick={clicked}
        />
        <span className={classes.Checkmark}></span>
      </label>
    </div>
  );
};

RadioBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  changed: PropTypes.func,
  clicked: PropTypes.func
};

RadioBox.defaultProps = {
  label: "Car",
  name: "car",
  value: "Royce Roll"
}

export default RadioBox;
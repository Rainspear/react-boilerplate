import React from 'react';
import PropTypes from 'prop-types';
import classes from './PostItem.module.scss';

const PostItem = props => {
  const { classWrap, post: { date, title, content } } = props;
  return (
    <div className={[classes.PostItem, classWrap].join(" ")}>
      <div className={classes.Content}>
        <h2 className={classes.Heading2}>{date} {title && title}</h2>
        <p className={classes.Paragraph}>{content}</p>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  right: PropTypes.bool,
  classWrap: PropTypes.string,

};
PostItem.defaultProps = {
  right: false,
  post: {
    title: "1997",
    content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."
  }

}
export default PostItem;
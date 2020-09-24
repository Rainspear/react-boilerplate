import React from 'react';
import PropTypes from 'prop-types';
import classes from './Timeline.module.scss';
import PostList from './PostList/PostList'
const Timeline = props => {
  const { posts } = props;
  return (
    <div className={classes.Timeline}>
        <PostList posts={posts}/>
    </div>
  );
};

Timeline.propTypes = {
  posts: PropTypes.array,
};

Timeline.defaultProps = {
  posts: [
    {
      date: "2011",
      title: "",
      content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      date: "2012",
      title: "",
      content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
    {
      date: "2013",
      title: "",
      content: "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
    },
  ]
}

export default Timeline;
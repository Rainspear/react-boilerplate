import React from 'react';
import PropTypes from 'prop-types';
import classes from './PostList.module.scss';
import PostItem from './PostItem/PostItem';
const PostList = props => {
  const { posts } = props;
  return (
    <>
      {posts?.length > 0 && posts.map((post, i) => {
        let classWrap = classes.Left;
        if ((i + 1) % 2 === 0) {
          classWrap = classes.Right;
        }
        return <PostItem classWrap={classWrap} post={post} />
      })}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: []
}

export default PostList;
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return !!posts && posts.map((post) => <PostCard post={post} />);
};

export default PostList;

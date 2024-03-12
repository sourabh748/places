const PostWrapper = ({ children, className="" }) => (
  <div className={`w-full sm:w-9/12 min-h-screen mx-auto ${className}`}>
    {children}
  </div>
);

export default PostWrapper;

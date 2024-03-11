const PostsCard = ({ name, profileImg, tags, postDescription, postImage }) => {
  return (
    <div className="w-full sm:w-6/12 my-4 mx-auto p-2 rounded-xl">
      <div className="flex gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={profileImg}
          alt="profileImage"
        />
        <h2 className="text-sm font-bold text-center">{name}</h2>
      </div>
      <div>
        <p>{postDescription}</p>
      </div>
      <p className="font-bold text-red-700">{tags.join(" ").slice(0, 20)}...</p>
      <div>
        <img className="w-[100%] h-[30rem]" src={postImage} alt="postImage" />
      </div>
    </div>
  );
};

export default PostsCard;

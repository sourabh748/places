import React, { useEffect, useState } from "react";
import PostWrapper from "./container/PostWrapper";
import PostsCard from "./PostsCard";
import fireBaseDB from "../app/fireBaseDB";
import ShimmercardRes from "./ShimmercardRes";

const PostsLists = () => {
  const [postsLists, setPostsLists] = useState({});

  useEffect(() => {
    fireBaseDB.retrivePostsDocuments(setPostsLists);
  }, []);

  if (Object.keys(postsLists).length === 0)
    return (
      <PostWrapper>
        <ShimmercardRes />
      </PostWrapper>
    );

  return (
    <PostWrapper className="flex flex-col-reverse">
      {Object.keys(postsLists).map((childSnapSortId) => {
        console.log(childSnapSortId);
        return (
          <PostsCard
            key={childSnapSortId}
            name={postsLists[childSnapSortId].userName}
            profileImg={postsLists[childSnapSortId].image.profileUrl}
            tags={postsLists[childSnapSortId].hashTags.split(" ")}
            postDescription={postsLists[childSnapSortId].description}
            postImage={postsLists[childSnapSortId].image.feedimage.url}
          />
        );
      })}
    </PostWrapper>
  );
};

export default PostsLists;

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
    <PostWrapper>
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
      {/* <PostsCard
        name={postsLists.userName}
        profileImg={
          "https://images.pexels.com/photos/19536432/pexels-photo-19536432/free-photo-of-vase-with-decorative-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        tags={["#find", "#file"]}
        postDescription={"Hi this is sourabh suman"}
        postImage={
          "https://images.pexels.com/photos/20448164/pexels-photo-20448164/free-photo-of-a-woman-in-a-floral-dress-holding-flowers-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      <PostsCard
        name={"Sourabh Suman"}
        profileImg={
          "https://images.pexels.com/photos/19536432/pexels-photo-19536432/free-photo-of-vase-with-decorative-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        tags={["#find", "#file"]}
        postDescription={"Hi this is sourabh suman"}
        postImage={
          "https://images.pexels.com/photos/20448164/pexels-photo-20448164/free-photo-of-a-woman-in-a-floral-dress-holding-flowers-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      <PostsCard
        name={"Sourabh Suman"}
        profileImg={
          "https://images.pexels.com/photos/19536432/pexels-photo-19536432/free-photo-of-vase-with-decorative-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        tags={["#find", "#file"]}
        postDescription={"Hi this is sourabh suman"}
        postImage={
          "https://images.pexels.com/photos/20448164/pexels-photo-20448164/free-photo-of-a-woman-in-a-floral-dress-holding-flowers-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      <PostsCard
        name={"Sourabh Suman"}
        profileImg={
          "https://images.pexels.com/photos/19536432/pexels-photo-19536432/free-photo-of-vase-with-decorative-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        tags={["#find", "#file"]}
        postDescription={"Hi this is sourabh suman"}
        postImage={
          "https://images.pexels.com/photos/20448164/pexels-photo-20448164/free-photo-of-a-woman-in-a-floral-dress-holding-flowers-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      <PostsCard
        name={"Sourabh Suman"}
        profileImg={
          "https://images.pexels.com/photos/19536432/pexels-photo-19536432/free-photo-of-vase-with-decorative-branches.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        tags={["#find", "#file"]}
        postDescription={"Hi this is sourabh suman"}
        postImage={
          "https://images.pexels.com/photos/20448164/pexels-photo-20448164/free-photo-of-a-woman-in-a-floral-dress-holding-flowers-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      /> */}
    </PostWrapper>
  );
};

export default PostsLists;

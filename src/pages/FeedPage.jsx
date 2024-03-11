import React, { useState, useRef } from "react";
import PostWrapper from "../components/container/PostWrapper";
import fireBaseDB from "../app/fireBaseDB";
import { PostSchema } from "../utils/schema/postSchema";
import { useSelector } from "react-redux";
import { FeedImageSchema } from "../utils/schema/FeedImageSchema";
import { useNavigate } from "react-router-dom";
import { OFFSITE_IMAGE_SIZE } from "../utils/constants";

const FeedPage = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [feedPageLoader, setFeedPageLoader] = useState(false);
  const [error, setError] = useState("");
  const descRef = useRef(null);
  const hashtagRef = useRef(null);
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth.userData);

  const handleOnsubmitFeedForm = async (e) => {
    console.log(userData);
    e.preventDefault();

    if (imagePreview === "") return;

    if (imagePreview.size >= OFFSITE_IMAGE_SIZE) {
      setError("Image Size should be less than 30MB");
      return;
    }

    setFeedPageLoader(true);

    const newForm = new FormData();
    newForm.append("file", imagePreview);
    newForm.append("upload_preset", "e6mqo7ul");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_ID}/image/upload`,
        {
          method: "post",
          body: newForm,
        },
      );
      const textResponse = await response.text();
      const jsonResponse = JSON.parse(textResponse);

      const {
        asset_id,
        created_at,
        etag,
        format,
        height,
        width,
        public_id,
        url,
        access_mode,
      } = jsonResponse;

      const feedImageObject = new FeedImageSchema(
        asset_id,
        created_at,
        etag,
        format,
        height,
        width,
        public_id,
        url,
        access_mode,
      );

      const image = {
        profileUrl: userData.photoURL,
        feedimage: feedImageObject,
      };

      const postObject = new PostSchema(
        Date.now(),
        userData.displayName,
        descRef?.current?.value,
        hashtagRef?.current?.value,
        image,
      );

      fireBaseDB.createPostsDocument(postObject);
      setFeedPageLoader(false);
      navigate("/browse");
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <PostWrapper>
      <form
        onSubmit={handleOnsubmitFeedForm}
        className="w-8/12 mx-auto my-3"
        method="post"
      >
        <div className="mb-2">
          <label htmlFor="description">Discription: </label>
          <input
            ref={descRef}
            required
            className="w-full outline-none rounded-md border-2 border-blue-500"
            id="description"
            type="text"
            placeholder="Description should be sort and crisp..."
          />
        </div>
        <div className="mb-2">
          <label htmlFor="hashtags">Add your hash tags: </label>
          <input
            ref={hashtagRef}
            className="w-full outline-none rounded-md border-2 border-blue-500"
            id="hashtags"
            type="text"
            placeholder="add your hashtag hear"
          />
        </div>
        <div className="mt-5 text-center">
          <label
            className="p-2 bg-orange-400 cursor-pointer rounded active:scale-95"
            htmlFor="file"
          >
            ⬆️ Upload Image
          </label>
          <input
            required
            onChange={(e) => {
              setImagePreview(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
            className="hidden"
            type="file"
            id="file"
          />
        </div>
        {imagePreview && (
          <div className="w-8/12 mx-auto my-5">
            <img src={URL.createObjectURL(imagePreview)} alt="No image src" />
          </div>
        )}
        <div className="mt-5 text-center">
          <button className="px-2 rounded-md bg-orange-400" type="submit">
            Add post
          </button>
        </div>
        {error && (
          <div>
            <p className="text-red-500 text-center">{error}</p>
          </div>
        )}
      </form>
    </PostWrapper>
  );
};

export default FeedPage;

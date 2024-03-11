import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const TestPage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "de3x15xqv",
    },
  });

  const myImage = cld.image(`sample`);
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export default TestPage;

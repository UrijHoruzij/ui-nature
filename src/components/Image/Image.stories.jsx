import React from "react";
import { Image } from "../";

export default {
  title: "Components/Image",
  component: Image,
};

export const Default = () => (
  <Image
    width="300"
    height="400"
    src="https://images.unsplash.com/photo-1477322524744-0eece9e79640"
  />
);

import React from "react";
import { IconButton } from "../";

export default {
  title: "Components/IconButton",
  component: IconButton,
};

export const Primary = () => (
  <IconButton icon="close" type="primary"></IconButton>
);
export const Secondary = () => (
  <IconButton icon="close" type="secondary"></IconButton>
);
export const Outline = () => (
  <IconButton icon="close" type="outline"></IconButton>
);
export const OutlinePrimary = () => (
  <IconButton icon="close" type="outline-primary"></IconButton>
);
export const Link = () => <IconButton icon="close" type="link"></IconButton>;
export const LinkPrimary = () => (
  <IconButton icon="close" type="link-primary"></IconButton>
);

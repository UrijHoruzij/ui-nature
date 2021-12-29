import React from "react";
import { Button } from "../";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button type="primary">Primary</Button>;
export const Secondary = () => <Button type="secondary">Secondary</Button>;
export const Outline = () => <Button type="outline">Outline</Button>;
export const OutlinePrimary = () => (
  <Button type="outline-primary">Outline-primary</Button>
);
export const Link = () => <Button type="link">Link</Button>;
export const LinkPrimary = () => (
  <Button type="link-primary">Link-primary</Button>
);

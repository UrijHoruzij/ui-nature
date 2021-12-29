import React from "react";
import { Typography } from "../";

export default {
  title: "Components/Typography",
  component: Typography,
};

export const H1 = () => <Typography type="h1">Заголовок 1</Typography>;
export const H2 = () => <Typography type="h2">Заголовок 2</Typography>;
export const H3 = () => <Typography type="h3">Заголовок 3</Typography>;
export const H4 = () => <Typography type="h4">Заголовок 4</Typography>;
export const Text = () => <Typography type="text">Текст</Typography>;
export const Uppercase = () => (
  <Typography type="h1" uppercase>
    Заголовок 1
  </Typography>
);
export const Overlined = () => (
  <Typography type="h1" decoration="overline">
    Заголовок 1
  </Typography>
);
export const Underlined = () => (
  <Typography type="h1" decoration="underline">
    Заголовок 1
  </Typography>
);
export const Crossed = () => (
  <Typography type="h1" decoration="line-through">
    Заголовок 1
  </Typography>
);

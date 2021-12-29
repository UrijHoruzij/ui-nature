import React from "react";
import { Empty, Icon } from "../";

export default {
  title: "Components/Empty",
  component: Empty,
};

export const Default = () => (
  <Empty image={<Icon name="close" />} description="Файл не найден" />
);

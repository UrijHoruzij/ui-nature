import React from "react";
import { Frame, Button } from "../";

export default {
  title: "Components/Frame",
  component: Frame,
};

export const Default = () => (
  <Frame>
    <Button type="primary">Кнопка</Button>
    <Button type="primary">Кнопка</Button>
    <Button type="primary">Кнопка</Button>
    <Button type="primary">Кнопка</Button>
    <Button type="primary">Кнопка</Button>
    <Button type="primary">Кнопка</Button>
  </Frame>
);

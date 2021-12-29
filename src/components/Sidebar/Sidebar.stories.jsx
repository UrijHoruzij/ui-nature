import React from "react";
import { Sidebar, Avatar, Typography, Button } from "../";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

export const Default = () => (
  <Sidebar color="#ebeaea">
    <Typography type="h1">Хранилище</Typography>
    <Avatar
      avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
      fullname="Helena Lopes"
      style={{ marginTop: "24px" }}
      size="large"
    />
    <Button style={{ marginTop: "24px" }}>Загрузить</Button>
  </Sidebar>
);

export const Acrilic = () => (
  <Sidebar
    blur
    color="rgba(10,110,168,0.25)"
    background="https://images.unsplash.com/photo-1605505027420-a74af00e6ee2"
  >
    <Typography type="h1">Хранилище</Typography>
    <Avatar
      avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
      fullname="Helena Lopes"
      style={{ marginTop: "24px" }}
      size="large"
    />
    <Button style={{ marginTop: "24px" }}>Загрузить</Button>
  </Sidebar>
);

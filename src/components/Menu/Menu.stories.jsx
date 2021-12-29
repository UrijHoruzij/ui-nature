import React from "react";
import { Menu } from "../";

export default {
  title: "Components/Menu",
  component: Menu,
};

export const Default = () => {
  const menu = [
    {
      id: 1,
      name: "Файлы",
      icon: "file",
      onClick: () => {
        console.log("Файлы");
      },
    },
    {
      id: 2,
      name: "Последние",
      icon: "last-time",
      onClick: () => {
        console.log("Последние");
      },
    },
    {
      id: 3,
      name: "Фотографии",
      icon: "photo",
      onClick: () => {
        console.log("Фотографии");
      },
    },
  ];
  return <Menu menu={menu} activItem={1} />;
};

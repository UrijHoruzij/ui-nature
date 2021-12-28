import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Menu } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Menu component", () => {
  test("Render menu", () => {
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
    const component = (
      <ThemeProvider>
        <Menu menu={menu} activItem={1} />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { IconButton } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("IconButton component", () => {
  test("Render iconbutton", () => {
    const component = (
      <ThemeProvider>
        <IconButton icon="close" type="primary"></IconButton>
        <IconButton icon="close" type="secondary"></IconButton>
        <IconButton icon="close" type="outline"></IconButton>
        <IconButton icon="close" type="outline-primary"></IconButton>
        <IconButton icon="close" type="link"></IconButton>
        <IconButton icon="close" type="link-primary"></IconButton>
        <IconButton icon="close" type="primary" disabled></IconButton>
        <IconButton overlay={<input type="file" />} icon="close" type="primary">
          Закрыть
        </IconButton>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

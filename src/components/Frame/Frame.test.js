import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Frame, Button } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Frame component", () => {
  test("Render frame", () => {
    const component = (
      <ThemeProvider>
        <Frame>
          <Button type="primary">Кнопка</Button>
          <Button type="primary">Кнопка</Button>
          <Button type="primary">Кнопка</Button>
          <Button type="primary">Кнопка</Button>
          <Button type="primary">Кнопка</Button>
          <Button type="primary">Кнопка</Button>
        </Frame>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

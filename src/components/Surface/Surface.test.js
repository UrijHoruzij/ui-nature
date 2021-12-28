import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Surface } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Surface component", () => {
  test("Render surface", () => {
    const component = (
      <ThemeProvider>
        <Surface></Surface>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

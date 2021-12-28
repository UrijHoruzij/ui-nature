import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ProgressBar } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("ProgressBar component", () => {
  test("Render progressbar", () => {
    const component = (
      <ThemeProvider>
        <ProgressBar percent={78} />
        <ProgressBar percent={45} type="error" />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { CheckBox } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Checkbox component", () => {
  test("Render checkbox", () => {
    const component = (
      <ThemeProvider>
        <CheckBox name="chk" onChange={() => console.log("check")} />
        <CheckBox name="chk2" checked />
        <CheckBox name="chk3" disabled />
        <CheckBox name="chk4" checked disabled />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

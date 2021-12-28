import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Form } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Form component", () => {
  test("Render form", () => {
    const component = (
      <ThemeProvider>
        <Form></Form>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

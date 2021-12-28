import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Empty, Icon } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Empty component", () => {
  test("Render empty", () => {
    const component = (
      <ThemeProvider>
        <Empty image={<Icon name="close" />} description="Файл не найден" />;
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

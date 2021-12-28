import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Image } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Image component", () => {
  test("Render image", () => {
    const component = (
      <ThemeProvider>
        <Image
          width="300"
          height="400"
          src="https://images.unsplash.com/photo-1477322524744-0eece9e79640"
        />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

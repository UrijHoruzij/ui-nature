import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Avatar } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Avatar component", () => {
  test("Render avatar", () => {
    const component = (
      <ThemeProvider>
        <Avatar
          avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          fullname="Helena Lopes"
          isOnline
          size="small"
        />
        <Avatar
          avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          fullname="Helena Lopes"
          isOnline
          size="medium"
        />
        <Avatar
          avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          fullname="Helena Lopes"
          isOnline
          size="large"
        />
        <Avatar
          user="43764838932479234"
          fullname="Helena Lopes"
          isOnline
          size="small"
        />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

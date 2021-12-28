import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Sidebar, Avatar, Typography, Button } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Sidebar component", () => {
  test("Render sidebar", () => {
    const component = (
      <ThemeProvider>
        <Sidebar
          blur
          color="rgba(10,110,168,0.25)"
          background="https://images.unsplash.com/photo-1605505027420-a74af00e6ee2"
        >
          <Typography type="h1">Хранилище</Typography>
          <Avatar
            avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
            fullname="Helena Lopes"
            style={{ marginTop: "24px" }}
            size="large"
          />
          <Button style={{ marginTop: "24px" }}>Загрузить</Button>
        </Sidebar>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

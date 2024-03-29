import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Typography } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Typography component", () => {
  test("Render typography", () => {
    const component = (
      <ThemeProvider>
        <Typography type="h1">Заголовок 1</Typography>
        <Typography type="h2">Заголовок 2</Typography>
        <Typography type="h3">Заголовок 3</Typography>
        <Typography type="h4">Заголовок 4</Typography>
        <Typography type="text">Текст</Typography>
        <Typography type="h1" transform="capitalize">
          Заголовок 1
        </Typography>
        <Typography type="h1" transform="lowercase">
          Заголовок 1
        </Typography>
        <Typography type="h1" transform="uppercase">
          Заголовок 1
        </Typography>
        <Typography type="h1" decoration="overline">
          Заголовок 1
        </Typography>
        <Typography type="h1" decoration="underline">
          Заголовок 1
        </Typography>
        <Typography type="h1" decoration="line-through">
          Заголовок 1
        </Typography>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

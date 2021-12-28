import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Input } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Input component", () => {
  test("Render input", () => {
    const component = (
      <ThemeProvider>
        <Input
          type="text"
          value=""
          placeholder="Логин"
          name="login"
          onChange={() => {}}
        />
        <Input
          type="text"
          value=""
          placeholder="Логин"
          name="login"
          status="success"
          onChange={() => {}}
        />
        <Input
          type="text"
          value=""
          placeholder="Логин"
          name="login"
          status="warning"
          onChange={() => {}}
        />
        <Input
          type="text"
          value=""
          placeholder="Логин"
          name="login"
          help="Неправильный пароль"
          status="error"
          onChange={() => {}}
        />
        <Input
          type="text"
          value=""
          placeholder="Логин"
          name="login"
          onChange={() => {}}
          visibleTitle={false}
        />
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Button, Icon } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Button component", () => {
  test("Render button", () => {
    const component = (
      <ThemeProvider>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="outline">Outline</Button>
        <Button type="outline-primary">Outline-primary</Button>
        <Button type="link">Link</Button>
        <Button type="link-primary">Link-primary</Button>
        <Button type="primary" disabled>
          Disabled
        </Button>
        <Button type="primary" rounded>
          Войти
        </Button>
        <Button type="primary" fullWidth>
          Войти
        </Button>
        <Button
          iconPosition="left"
          icon={<Icon name="close" color="contrast" />}
          type="primary"
        >
          Закрыть
        </Button>
        ;
        <Button
          iconPosition="right"
          icon={<Icon name="close" color="contrast" />}
          type="primary"
        >
          Закрыть
        </Button>
        ;
        <Button
          overlay={<input type="file" />}
          icon={<Icon name="close" iconPosition="right" color="contrast" />}
          type="primary"
        >
          Закрыть
        </Button>
        ;
        <Button loadingData type="primary">
          Закрыть
        </Button>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

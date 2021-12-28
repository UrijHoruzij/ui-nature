import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Tooltip, Button, Image, Typography } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Tooltip component", () => {
  test("Render tooltip", () => {
    const component = (
      <ThemeProvider>
        <Tooltip
          position="left"
          info={
            <Typography type="text" color="text">
              Описание
            </Typography>
          }
        >
          <Button>Left</Button>
        </Tooltip>
        <Tooltip
          position="left"
          info={
            <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
          }
        >
          <Button>Left</Button>
        </Tooltip>
        <Tooltip
          position="right"
          info={
            <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
          }
        >
          <Button>Right</Button>
        </Tooltip>
        <Tooltip
          info={
            <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
          }
          position="top"
        >
          <Button>Top</Button>
        </Tooltip>
        <Tooltip
          position="bottom"
          info={
            <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
          }
        >
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip
          visible
          type="tooltip-close"
          position="bottom"
          info={
            <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
          }
        >
          <Button>Bottom</Button>
        </Tooltip>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

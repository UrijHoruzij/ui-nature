import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Popup, Typography, Image } from "../";
import ThemeProvider from "../../ThemeProvide";

describe("Popup component", () => {
  test("Render popup", () => {
    const component = (
      <ThemeProvider>
        <Popup
          visible={true}
          style={{
            position: "relative",
            transform: "translate(0,0)",
            top: 0,
            left: 0,
          }}
        >
          <Typography type="text">Popup</Typography>
          <Typography type="text">description</Typography>
        </Popup>
        <Popup
          title="Popup"
          visible={true}
          style={{
            position: "relative",
            transform: "translate(0,0)",
            top: 0,
            left: 0,
          }}
          type="popup-close"
        >
          <Typography type="text">Popup</Typography>
          <Typography type="text">description</Typography>
        </Popup>
        <Popup
          visible={true}
          style={{
            position: "relative",
            transform: "translate(0,0)",
            top: 0,
            left: 0,
          }}
          type="popup"
        >
          <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
        </Popup>
      </ThemeProvider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

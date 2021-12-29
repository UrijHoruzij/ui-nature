import React from "react";
import { Popup, Image, Typography } from "../";

export default {
  title: "Components/Popup",
  component: Popup,
};

export const Default = () => (
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
);

export const PopupClose = () => (
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
);
export const PopupThumbnail = () => (
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
);

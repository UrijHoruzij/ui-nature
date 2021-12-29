import React from "react";
import { Tooltip, Button, Image, Typography } from "../";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Default = () => (
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
);
export const Left = () => (
  <Tooltip
    position="left"
    info={
      <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
    }
  >
    <Button>Left</Button>
  </Tooltip>
);
export const Right = () => (
  <Tooltip
    position="right"
    info={
      <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
    }
  >
    <Button>Right</Button>
  </Tooltip>
);
export const Top = () => (
  <Tooltip
    info={
      <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
    }
    position="top"
  >
    <Button>Top</Button>
  </Tooltip>
);
export const Bottom = () => (
  <Tooltip
    position="bottom"
    info={
      <Image src="https://images.unsplash.com/photo-1477322524744-0eece9e79640" />
    }
  >
    <Button>Bottom</Button>
  </Tooltip>
);
export const TooltipClose = () => (
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
);

import React from "react";
import { ProgressBar } from "../";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
};

export const Default = () => <ProgressBar percent={78} />;

export const Error = () => <ProgressBar percent={45} type="error" />;

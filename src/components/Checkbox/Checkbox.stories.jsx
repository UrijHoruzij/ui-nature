import React from "react";
import { CheckBox } from "../";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
};

export const Default = () => (
  <CheckBox name="chk" onChange={() => console.log("check")} />
);

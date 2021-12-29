import React from "react";
import { Input } from "../";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => (
  <Input
    type="text"
    value=""
    placeholder="Логин"
    name="login"
    onChange={() => {}}
  />
);
export const Success = () => (
  <Input
    type="text"
    value=""
    placeholder="Логин"
    name="login"
    status="success"
    onChange={() => {}}
  />
);
export const Warning = () => (
  <Input
    type="text"
    value=""
    placeholder="Логин"
    name="login"
    status="warning"
    onChange={() => {}}
  />
);
export const Error = () => (
  <Input
    type="text"
    value=""
    placeholder="Логин"
    name="login"
    help="Неправильный пароль"
    status="error"
    onChange={() => {}}
  />
);
export const HiddenTitle = () => (
  <Input
    type="text"
    value=""
    placeholder="Логин"
    name="login"
    onChange={() => {}}
    visibleTitle={false}
  />
);

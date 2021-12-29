import React from "react";
import { Avatar } from "../";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Small = () => (
  <Avatar
    avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
    fullname="Helena Lopes"
    isOnline
    size="small"
  />
);
export const Medium = () => (
  <Avatar
    avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
    fullname="Helena Lopes"
    isOnline
    size="medium"
  />
);
export const Large = () => (
  <Avatar
    avatar="https://images.unsplash.com/photo-1517841905240-472988babdf9"
    fullname="Helena Lopes"
    isOnline
    size="large"
  />
);
export const SymbolSmall = () => (
  <Avatar
    user="43764838932479234"
    fullname="Helena Lopes"
    isOnline
    size="small"
  />
);
export const SymbolMedium = () => (
  <Avatar
    user="43764838932479234"
    fullname="Helena Lopes"
    isOnline
    size="medium"
  />
);
export const SymbolLarge = () => (
  <Avatar
    user="43764838932479234"
    fullname="Helena Lopes"
    isOnline
    size="large"
  />
);

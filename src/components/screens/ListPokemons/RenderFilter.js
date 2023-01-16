import React, { memo } from "react";
import { View, Dimensions } from "react-native";
import { Card } from "./Card/Card";
const { width } = Dimensions.get("window");

const RenderFilter = ({ item }) => {
  const { name } = item;
  return <Card name={name & name} />;
};

export default memo(RenderFilter);

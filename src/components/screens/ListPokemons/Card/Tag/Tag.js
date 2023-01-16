import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, textColor } from "../../../../../assets/color";
import { Icon } from "../../.././../Icon/Icon";
import commonStyles from "../.././.././../styles/commonStyles";

export const Tag = ({ type }) => {
  return (
    <View style={{ ...styles.tag, backgroundColor: colors[type] }}>
      <Icon style={{ paddingHorizontal: 0 }} type={type} />
      <Text
        style={{
          color: textColor.white,
          marginLeft: 2,
          textTransform: "capitalize"
        }}
      >
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderRadius: 5,
    marginRight: 5,
    marginTop: 2,
    padding: 5,
    paddingEnd: 10,
    ...commonStyles.row
  }
});

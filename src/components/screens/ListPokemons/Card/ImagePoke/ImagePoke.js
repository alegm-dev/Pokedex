import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const ImagePoke = ({ sprites }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={sprites && sprites} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    right: 20,
    bottom: 0,
    zIndex: 20
  },
  image: {
    width: 120,
    height: 120
  }
});

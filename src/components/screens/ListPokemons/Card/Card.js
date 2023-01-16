import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { backgroundColors } from "../../../../assets/color";
import commonStyles from "../../../styles/commonStyles";
import { Tag } from "./Tag/Tag";
import { ImagePoke } from "./ImagePoke/ImagePoke";
import Dots_card from "../../../../assets/Images/Dots_card.png";
import Pokeball_card from "../../../../assets/Images/Pokeball_card.png";
const { width } = Dimensions.get("window");

export const Card = ({ name }) => {
  const [dataPoke, setDataPoke] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDataPoke(data);
        setIsLoading(false);
      });

    return () => setDataPoke();
  }, [name]);

  return isLoading ? (
    <View style={{ width: width, marginVertical: 10 }}>
      <ActivityIndicator sice="large" color="#333" />
    </View>
  ) : (
    <View
      style={{
        ...styles.card,
        backgroundColor: backgroundColors[dataPoke?.types[0].type.name]
      }}
    >
      <View style={{ position: "absolute", top: 0, left: 100 }}>
        <Image source={Dots_card} style={{ width: 100, height: 60 }} />
      </View>
      <View>
        <Text style={commonStyles.number}>#{dataPoke?.id}</Text>
        <Text
          style={{
            ...commonStyles.title
          }}
        >
          {dataPoke?.name}
        </Text>
        <View style={commonStyles.row}>
          {dataPoke?.types.map(({ type, index }) => (
            <Tag type={type.name} key={type.url} />
          ))}
        </View>
      </View>
      <ImagePoke
        isLoading={isLoading}
        sprites={dataPoke?.sprites.other["official-artwork"].front_default}
        name={name}
      />
      <View style={styles.Pokeball_card}>
        <Image source={Pokeball_card} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 20,
    padding: 20,
    borderRadius: 10
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    right: 0
  },
  Pokeball_card: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1
  }
});

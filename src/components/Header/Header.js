import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { height } from "../../assets/constants";
import PokeballHeader from "../../assets/Images/Pokeball_header.png";
import commonStyles from "../styles/commonStyles";
import { Generation } from "../../assets/Icons/Generation";
import { Sort } from "../../assets/Icons/Sort";
import { Filter } from "../../assets/Icons/Filter";
import { textColor } from "../../assets/color";
import { Icon } from "../Icon/Icon";
import { SearchPokemon } from "./Search/SearchPokemon";

export const Header = ({ clicked, setClicked }) => {
  return (
    <ImageBackground
      risizeMode="contain"
      style={{ width: "100%", height: height / 4 }}
      source={PokeballHeader}
    >
      <View style={commonStyles.container}>
        <View
          style={{
            ...commonStyles.row,
            justifyContent: "flex-end",
            marginVertical: 15
          }}
        >
          <Icon>
            <Generation color={textColor.black} />
          </Icon>
          <Icon>
            <Sort color={textColor.black} />
          </Icon>
          <Icon>
            <Filter color={textColor.black} />
          </Icon>
        </View>
        <Text style={commonStyles.heading}>Pokedex</Text>
        <Text style={commonStyles.subHeading}>
          Busca pokemon por nombre o usando el número de Pokedex.
        </Text>
        <SearchPokemon clicked={clicked} setClicked={setClicked} />
      </View>
    </ImageBackground>
  );
};

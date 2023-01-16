import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { Card } from "./Card/Card";
import commonStyles from "../../styles/commonStyles";
import RenderFilter from "./RenderFilter";
import RenderItem from "./RenderItem";
const { width } = Dimensions.get("window");

export const ListPokemons = ({
  isLoading,
  pokemons,
  filterPokemon,
  loaderMoreItemNext,
  clicked,
  setClicked
}) => {
  const myItemSeparator = () => {
    return <View style={{ height: 20 }} />;
  };

  const renderItem = ({ item }) => <RenderItem item={item} />;

  const renderLoader = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator sice="large" color="#aaa" />
      </View>
    );
  };

  return (
    <View style={{ width: width, flex: 1, ...commonStyles.container }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#333" />
      ) : (
        <FlatList
          style={{ flex: 1 }}
          legacyImplementation={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(poke, index) => index.toString()}
          data={!isLoading && pokemons}
          renderItem={!isLoading && renderItem}
          ItemSeparatorComponent={myItemSeparator}
          ListFooterComponent={!isLoading && renderLoader}
          onEndReached={!isLoading && loaderMoreItemNext}
          onEndReachedThreshold={0.001}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 16,
    alignItems: "center"
  }
});

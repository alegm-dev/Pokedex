import React, { memo } from "react";
import { ScrollView, Dimensions } from "react-native";
import { Card } from "./Card/Card";
const { width } = Dimensions.get("window");

const RenderItem = ({ item }) => {
  //const { chain } = item;
  //const { evolves_to, species } = chain;
  //const pokemon = species.name;
  //const evolucion2 = evolves_to[0]?.species.name;
  //const evolucion3 = evolves_to[0]?.evolves_to[0]?.species.name;
  return <Card name={item.name} />;
  /*<ScrollView
      horizontal
      pagingEnabled
      style={{
        width: width,
        paddingEnd: 20
      }}
    >*/

  /*evolucion2 && <Card name={evolucion2} />}
      {evolucion3 && <Card name={evolucion3} />*/

  /* </ScrollView>*/
};

export default memo(RenderItem);

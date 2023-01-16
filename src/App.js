import React from "react";
import { StatusBar, View } from "react-native";
import { textColor } from "./assets/color";
import { HomeScreen } from "./components/screens/HomeScreen";
import { PokeProvider } from "./context/context";

export const App = () => {
  return (
    <PokeProvider>
      <StatusBar barStyle={"dark-content"} backgroundColor={textColor.white} />
      <View style={{ flex: 1, backgroundColor: textColor.white }}>
        <HomeScreen />
      </View>
    </PokeProvider>
  );
};

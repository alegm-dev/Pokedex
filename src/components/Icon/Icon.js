import { TouchableOpacity, StyleSheet } from "react-native";
import { textColor } from "../../assets/color";
import { Grass } from "../../assets/Icons/Grass";
import { Dragon } from "../../assets/Icons/Dragon";
import { Dark } from "../../assets/Icons/Dark";
import { Fire } from "../../assets/Icons/Fire";

export const Icon = ({ children, type, onPress, style }) => {
  const types = {
    grass: <Grass />,
    flying: <Dragon />,
    default: <Dark />
  };

  const getType = (type) => {
    return types[type] || types["default"];
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.icon,
        ...style,
        color: type && textColor.white,
        transform: type && "scale(0.6)"
      }}
      onPress={onPress}
    >
      {type ? getType(type) : children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10
  }
});

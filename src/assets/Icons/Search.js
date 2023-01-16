import * as React from "react";
import { Path, Svg } from "react-native-web-svg";

export const Search = (props) => (
  <Svg
    width={21}
    height={21}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.235 15.029a8.027 8.027 0 1 1 1.794-1.794c.126.062.244.146.35.251l4.73 4.73a1.338 1.338 0 0 1-1.893 1.892l-4.73-4.73a1.335 1.335 0 0 1-.251-.35Zm.643-6.502a5.351 5.351 0 1 1-10.702 0 5.351 5.351 0 0 1 10.702 0Z"
    />
  </Svg>
);

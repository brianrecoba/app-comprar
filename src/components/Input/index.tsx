import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      {...rest}
      style={styles.container}
      placeholderTextColor="#74798B"
    />
  );
}

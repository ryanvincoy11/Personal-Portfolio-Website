import { Colors } from '../../constants/theme';
import { StyleSheet, Text, View, TextStyle} from 'react-native';
import {ReactNode } from 'react';

type OutlinedTextProps = {
  children: ReactNode;
  style?: TextStyle;
};

export function OutlinedText({ children, style }: OutlinedTextProps) {
  return (
    <View style={{ position: "relative" }}>
      {/* Outline layers */}
      <Text style={[style, styles.outline, { top: -3, left: 0 }]}>{children}</Text>
      <Text style={[style, styles.outline, { top: 3, left: 0 }]}>{children}</Text>
      <Text style={[style, styles.outline, { top: 0, left: -3 }]}>{children}</Text>

      {/* Main text */}
      <Text style={[style, { color: Colors.dark.title }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outline: {
    position: "absolute",
    color: "black",
  },
});

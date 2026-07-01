import { Colors } from '../../constants/theme';
import { StyleSheet, Text, View, TextStyle, useWindowDimensions } from 'react-native';
import { ReactNode } from 'react';

type OutlinedTextProps = {
  children: ReactNode;
  style?: TextStyle;
};

export function OutlinedText({ children, style }: OutlinedTextProps) {
  const { width: screenWidth } = useWindowDimensions();

  // Responsive outline offset
  const offset = screenWidth < 480 ? 2 : 3;

  // Responsive font size (if provided)
  const responsiveStyle = {
    ...(style || {}),
    fontSize: style?.fontSize
      ? screenWidth < 480
        ? style.fontSize * 0.85
        : style.fontSize
      : undefined,
  };

  return (
    <View style={styles.container}>
      {/* Outline layers */}
      <Text style={[responsiveStyle, styles.outline, { top: -offset, left: 0 }]}>
        {children}
      </Text>
      <Text style={[responsiveStyle, styles.outline, { top: offset, left: 0 }]}>
        {children}
      </Text>
      <Text style={[responsiveStyle, styles.outline, { top: 0, left: -offset }]}>
        {children}
      </Text>

      {/* Main text */}
      <Text style={[responsiveStyle, { color: Colors.dark.title }]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    position: "absolute",
    color: "black",
  },
});

import { View, Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { Colors, Fonts } from '../../constants/theme';
import { Audio } from "expo-av";

type HyperlinkProps = {
  label: string;
  onPress: () => void;
  size?: number; // font size
};

export function Hyperlink({ label, onPress, size = 18 }: HyperlinkProps) {
  const [hovered, setHovered] = useState(false);
  const { width: screenWidth } = useWindowDimensions();

  // Responsive font size
  const responsiveFontSize =
    screenWidth < 480
      ? size * 0.85 // slightly smaller on phones
      : size;

  async function handlePress() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../sounds/retroClick.mp3")
      );
      await sound.setVolumeAsync(0.15);
      await sound.playAsync();
    } catch {
      console.log("Click sound blocked until user interacts");
    }

    onPress();
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <Text
          style={[
            styles.text,
            hovered && styles.textHovered,
            { fontSize: responsiveFontSize },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },

  pressable: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  pressed: {
    opacity: 0.7, // mobile press feedback
  },

  text: {
    fontFamily: Fonts.menu,
    color: '#060afb',
    textAlign: "center",
  },

  textHovered: {
    color: '#06befb',
    textDecorationLine: "underline",
  },
});

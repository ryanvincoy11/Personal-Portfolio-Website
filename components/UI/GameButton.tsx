import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { useRef, useState } from 'react';
import { Colors, Fonts } from '../../constants/theme';
import { Audio } from "expo-av";

type GameButtonProps = {
  label: string;
  labelHovered: string;
  onPress: () => void;
  size?: "large" | "small";
  selected?: boolean;
};

export function GameButton({ label, labelHovered, onPress, size = "large", selected = false}: GameButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const [buttonText, setButtonText] = useState(label);

  const width = size === "small" ? 140 : 300;
  const paddingVertical = size === "small" ? 15 : 20;
  const fontSize = size === "small" ? 11 : 20;

  function handleHoverIn() {
    setHovered(true);
    setButtonText(labelHovered);
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  }

  function handleHoverOut() {
    setHovered(false);
    setButtonText(label);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  async function handlePress() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../sounds/retroClick.mp3")
    );
    await sound.setVolumeAsync(0.15);
    await sound.playAsync();
    onPress();
  }

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={handlePress}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        style={[
          styles.button,
          hovered && styles.hoveredButton,
          selected && styles.selectedButton,
          { width, paddingVertical },
        ]}
      >
        <Text style={[styles.text, { fontSize }]}>{buttonText}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.button,
    paddingHorizontal: 11,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: 'black',
  },
  hoveredButton: {
    backgroundColor: Colors.dark.buttonHovered,
    borderColor: "white",
  },
  text: {
    color: Colors.dark.text,
    fontFamily: Fonts.menu,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.dark.selected,
  },
});

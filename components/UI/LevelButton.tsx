import { Pressable, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { useRef, useState } from 'react';
import { Colors, Fonts } from '../../constants/theme';
import { Audio } from "expo-av";

type LevelButtonProps = {
  label: string;
  onPress: () => void;
};

export function LevelButton({ label, onPress }: LevelButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);
  const { width: screenWidth } = useWindowDimensions();

  // Responsive width
  const responsiveWidth =
    screenWidth < 480
      ? "85%" // phones
      : 400;  // desktop

  // Responsive height
  const responsiveHeight =
    screenWidth < 480
      ? 60
      : 75;

  // Responsive font size
  const responsiveFontSize =
    screenWidth < 480
      ? 14
      : 16;

  function handleHoverIn() {
    setHovered(true);
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  }

  function handleHoverOut() {
    setHovered(false);
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

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
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={handlePress}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        style={({ pressed }) => [
          styles.button,
          hovered && styles.hoveredButton,
          pressed && styles.pressed,
          {
            width: responsiveWidth,
            height: responsiveHeight,
          },
        ]}
      >
        <Text style={[styles.text, { fontSize: responsiveFontSize }]}>
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoveredButton: {
    backgroundColor: '#b5b1b1',
    borderColor: '#413f3f',
  },
  pressed: {
    opacity: 0.7, // mobile press feedback
  },
  text: {
    color: 'black',
    fontFamily: Fonts.menu,
    textAlign: 'center',
  },
});

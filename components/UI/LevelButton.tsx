import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { useRef, useState } from 'react';
import { Colors, Fonts } from '../../constants/theme';
import { Audio } from "expo-av";

type GameButtonProps = {
  label: string;
  onPress: () => void;
};

export function LevelButton({ label, onPress}: GameButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const [hovered, setHovered] = useState(false);

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
        ]}
      >
        <Text style={[styles.text]}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 400,
    height: 75,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: 'black',
    justifyContent: 'center'
  },
  hoveredButton: {
    backgroundColor: '#b5b1b1',
    borderColor: '#413f3f',
  },
  text: {
    color: 'black',
    fontFamily: Fonts.menu,
    textAlign: 'center',
    fontSize: 15,
  },
});

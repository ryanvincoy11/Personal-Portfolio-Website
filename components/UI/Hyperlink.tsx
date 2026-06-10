import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Colors, Fonts } from '../../constants/theme';
import { Audio } from "expo-av";

type GameButtonProps = {
  label: string;
  onPress: () => void;
  size: number;
};

export function Hyperlink({ label, onPress, size}: GameButtonProps) {
  const [hovered, setHovered] = useState(false);

  function handleHoverIn() {
    setHovered(true);
  }

  function handleHoverOut() {
    setHovered(false);
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
    <View>
      <Pressable
        onPress={handlePress}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
      >
        <Text style={[
            styles.text,
            hovered && styles.textHovered,
            {fontSize:size}]}
            >{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textHovered: {
    paddingHorizontal: 11,
    borderRadius: 8,
    fontFamily: Fonts.menu,
    color: '#06befb'
  },
  text: {
    paddingHorizontal: 11,
    borderRadius: 8,
    fontFamily: Fonts.menu,
    color: '#060afb'
  },
});

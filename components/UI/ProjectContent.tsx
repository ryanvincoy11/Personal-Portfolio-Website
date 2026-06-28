import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Linking } from "react-native";
import { SpriteAnimator } from "./SpriteAnimator";
import { Colors, Fonts } from '../../constants/theme';
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { useFonts } from "expo-font";
import { useTheme } from "../ThemeProvider";
import { Hyperlink } from "../UI/Hyperlink";

type ProjectContentProps = {
    titleLabel: string,
    label: string,
    source: any,
    frameWidth: number,
    frameHeight: number,
    columns: number,
    frameCount: number,
    fps: number,
    hyperlinkLabel: string,
}

export function ProjectContent({titleLabel, label, source, frameWidth, frameHeight, columns, frameCount, fps, hyperlinkLabel}: ProjectContentProps) {

  const { theme } = useTheme();
  const colors = Colors[theme];

  const [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View style = {styles.container}>
      <Text style={[styles.textTitle, { color: colors.ccText }]}>{titleLabel}</Text>
      <View style={styles.horizontalContainer}>
        <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
            <Text style={styles.text}>
                {label}
            </Text>
        </ScrollView>

        <SpriteAnimator
            source = {source}
            frameWidth = {frameWidth}
            frameHeight={frameHeight}
            columns={columns}
            frameCount={frameCount}
            fps={fps}
            animateHorizontal={false}
        />
      </View>
      <Hyperlink
        label={hyperlinkLabel}
        size={12}
        onPress={() => Linking.openURL(hyperlinkLabel)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.dark.text,
    fontFamily: Fonts.description,
    textAlign: 'center',
    margin: 5,
    lineHeight: 25,
    fontSize: 20,
  },
  textTitle: {
    fontSize: 20,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    marginBottom: 25,
  },
  scrollArea: {
    flexShrink: 1,
    width: "50%",
    maxHeight: "55%",
    backgroundColor: 'white',
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
    margin: 5,
  },
});
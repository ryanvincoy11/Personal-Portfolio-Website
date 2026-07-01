import React from "react";
import { View, Text, ScrollView, StyleSheet, Linking, useWindowDimensions } from "react-native";
import { SpriteAnimator } from "./SpriteAnimator";
import { Colors, Fonts } from '../../constants/theme';
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { useFonts } from "expo-font";
import { useTheme } from "../ThemeProvider";
import { Hyperlink } from "../UI/Hyperlink";

type ProjectContentProps = {
  titleLabel: string;
  label: string;
  source: any;
  frameWidth: number;
  frameHeight: number;
  columns: number;
  frameCount: number;
  fps: number;
  hyperlinkLabel: string;
};

export function ProjectContent({
  titleLabel,
  label,
  source,
  frameWidth,
  frameHeight,
  columns,
  frameCount,
  fps,
  hyperlinkLabel
}: ProjectContentProps) {

  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const [fontsLoaded] = useFonts({ VT323_400Regular });
  if (!fontsLoaded) return null;

  // Responsive layout: stack vertically on phones, horizontal on desktop
  const isMobile = screenWidth < 600;

  // Responsive font sizes
  const titleFontSize = isMobile ? 18 : 22;
  const bodyFontSize = isMobile ? 16 : 20;

  // Responsive scroll area width
  const scrollWidth = isMobile ? "90%" : "50%";

  return (
    <View style={[styles.container, { paddingHorizontal: isMobile ? 10 : 20 }]}>
      
      <Text style={[styles.textTitle, { color: colors.ccText, fontSize: titleFontSize }]}>
        {titleLabel}
      </Text>

      <View
        style={[
          styles.horizontalContainer,
          { flexDirection: isMobile ? "column" : "row" }
        ]}
      >
        <ScrollView
          style={[
            styles.scrollArea,
            {
              width: scrollWidth,
              maxHeight: isMobile ? 200 : "55%",
            }
          ]}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={[styles.text, { fontSize: bodyFontSize }]}>
            {label}
          </Text>
        </ScrollView>

        <View style={{ marginTop: isMobile ? 20 : 0 }}>
          <SpriteAnimator
            source={source}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            columns={columns}
            frameCount={frameCount}
            fps={fps}
            animateHorizontal={false}
          />
        </View>
      </View>

      <Hyperlink
        label={hyperlinkLabel}
        size={isMobile ? 14 : 12}
        onPress={() => Linking.openURL(hyperlinkLabel)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  horizontalContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: Colors.dark.text,
    fontFamily: Fonts.description,
    textAlign: "center",
    margin: 5,
    lineHeight: 25,
  },
  textTitle: {
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    marginBottom: 25,
  },
  scrollArea: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
    borderRadius: 6,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 0,
    margin: 0,
  },
});

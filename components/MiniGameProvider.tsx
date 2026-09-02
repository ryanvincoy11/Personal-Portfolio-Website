import { createContext, useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet, Text, Image } from "react-native";
import { Colors, Fonts } from '../constants/theme';
import AsyncStorage from "@react-native-async-storage/async-storage";

type MiniGameContextType = {
  score: number;
};

const MiniGameContext = createContext<MiniGameContextType | null>(null);

export function MiniGameProvider({ children }: any) {
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    (async () => {
      const saved = await AsyncStorage.getItem("minigameScore");
      if (saved) setScore(Number(saved));
      scheduleNextAppearance();
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("minigameScore", String(score));
  }, [score]);

  function moveSprite() {
    const { width, height } = Dimensions.get("window");
    const newX = Math.random() * (width - 80);
    const newY = Math.random() * (height - 200);
    setPos({ x: newX, y: newY });
  }

  function randomDelay(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function scheduleNextAppearance() {
    
    const delay = randomDelay(4000, 12000); // 4–12 seconds
    console.log("DELAY:", delay);

    setTimeout(() => {
        //moveSprite();
        setVisible(true);
    }, delay);
  }

  function handlePress() {
    setScore(score + 1);
    setVisible(false);
    moveSprite();
    scheduleNextAppearance();
  }

  return (
    <MiniGameContext.Provider value={{ score }}>
      {children}

      <View style={styles.overlay} pointerEvents="box-none">
        <View style={styles.scoreUI} pointerEvents="none">
            <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
        {visible && (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.sprite, { left: pos.x, top: pos.y }]}
        >
            <Image
            source={require("../assets/MyHead.png")}
            style={styles.headImage}
            />
        </TouchableOpacity>
        )}
      </View>
    </MiniGameContext.Provider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sprite: {
    position: "absolute",
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreUI: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: Colors.dark.backgroundA + "cc", // slight transparency
    borderWidth: 3,
    borderColor: "white",
  },
  scoreText: {
    fontFamily: Fonts.menu,
    fontSize: 16,
    color: Colors.dark.ccText,
  },
  headImage: {
    width: 55,
    height: 55,
  },
});

export function useMiniGame() {
  return useContext(MiniGameContext);
}

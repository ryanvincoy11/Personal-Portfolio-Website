import { useEffect, useRef, useState } from "react";
import { View, Image, Animated } from "react-native";


type SpriteAnimatorProps = {
    source: any,
    frameWidth: number,
    frameHeight: number,
    columns: number,
    frameCount: number,
    fps: number,
    animateHorizontal?: boolean,
};


export function SpriteAnimator({
  source,
  frameWidth,
  frameHeight,
  columns,
  frameCount,
  fps = 23,
  animateHorizontal = false,
}: SpriteAnimatorProps) {
  const [frame, setFrame] = useState(0);


  // Frame stepping
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frameCount);
    }, 1000 / fps);


    return () => clearInterval(interval);
  }, [fps, frameCount]);


  // Horizontal movement
  const x = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    if (!animateHorizontal) return;
    Animated.loop(
      Animated.sequence([
        Animated.timing(x, {
          toValue: 150,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(x, {
          toValue: -150,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(x, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [x]);


  const col = frame % columns;
  const row = Math.floor(frame / columns);


  return (
    <Animated.View style={{ transform: [{ translateX: x }] }}>
      <View
        style={{
          width: frameWidth,
          height: frameHeight,
          overflow: "hidden",
        }}
      >
        <Image
          source={source}
          resizeMode="contain"
          style={{
            width: frameWidth * columns,
            height: frameHeight * Math.ceil(frameCount / columns),
            transform: [
              { translateX: -col * frameWidth },
              { translateY: -row * frameHeight },
            ],
          }}
        />
      </View>
    </Animated.View>
  );
}
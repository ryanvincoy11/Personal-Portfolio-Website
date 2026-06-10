import { createContext, useContext, useEffect, useRef } from "react";
import { Audio } from "expo-av";

const AudioContext = createContext<AudioContextType>(null);

type AudioProviderProps = {
    children: any
}

type AudioContextType = {
  playMusic: () => void;
  stopMusic: () => void;
} | null;

export function AudioProvider({ children }: AudioProviderProps) {
  const bgSound = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function load() {
      const { sound } = await Audio.Sound.createAsync(
        require("../sounds/retroBackgroundMusic.mp3"),
        { isLooping: true, volume: 0.2 }
      );
      bgSound.current = sound;
      await sound.setVolumeAsync(0.2);
      await sound.playAsync();
    }

    load();

    return () => {
      bgSound.current?.unloadAsync();
    };
  }, []);

  return (
    <AudioContext.Provider
    value={{
        playMusic: () => {},
        stopMusic: () => {},
    }}
    >
    {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

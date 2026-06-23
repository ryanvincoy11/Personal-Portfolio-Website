import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

type AudioContextType = {
  playMusic: () => void;
  stopMusic: () => void;
  musicVolume: number;
  setMusicVolume: (v: number) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);
type AudioProviderProp = {
  children: any;
};

export function AudioProvider({ children }: AudioProviderProp) {
  const bgSound = useRef<Audio.Sound | null>(null);
  const [musicVolume, setMusicVolume] = useState(0.5);

  // Load music once
  useEffect(() => {
    async function load() {
      const { sound } = await Audio.Sound.createAsync(
        require("../sounds/retroBackgroundMusic.mp3"),
        { isLooping: true, volume: musicVolume }
      );
      bgSound.current = sound;

      try {
        await sound.playAsync();
      } catch (e) {
        console.log("Autoplay blocked — waiting for user interaction");
      }
    }

    load();

    return () => {
      bgSound.current?.unloadAsync();
    };
  }, []);

  // Update volume live
  useEffect(() => {
    if (bgSound.current) {
      bgSound.current.setVolumeAsync(musicVolume);
    }
  }, [musicVolume]);

  const playMusic = async () => {
    if (bgSound.current) {
      try {
        await bgSound.current.playAsync();
      } catch (e) {
        console.log("Play blocked until user interacts");
      }
    }
  };

  const stopMusic = async () => {
    await bgSound.current?.stopAsync();
  };

  return (
    <AudioContext.Provider
      value={{
        playMusic,
        stopMusic,
        musicVolume,
        setMusicVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider");
  return ctx;
}

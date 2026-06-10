import { View, Text, StyleSheet, ScrollView, Pressable, Modal } from "react-native";
import { useState } from "react";
import { GameButton } from "../components/UI/GameButton";
import { LevelButton } from "../components/UI/LevelButton";
import { ProjectContent } from "../components/UI/ProjectContent";
import { Colors, Fonts } from "../constants/theme";

type levelScreenProp = {
    navigation: any
}
const projects = [
  {
    id: "MMWD",
    title: "Magic Missile Wizard Duel",
    desc: 
    "Description: Magic Missile Wizard Duel (MMWD) is a PvP video game prototype built using C# and Unity Engine."
    +" Me and my group built MMWD implemented the functionality required by the design team."
    +" We worked using the Agile developement methodology, doing weekly Scrum meetings and had monthly Sprints."
    +" We also used software design patterns to create a scalable and maintainable product."
    +" We also tested requirements and tested for bugs using unit testing and code inspections."
    +" Besides C# and Unity Engine, me and my group also used technology and software like"
    +" Jira to plan monthly Sprints and Git for version control.",
    source: require("../assets/MMWDSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 4,
    fps: 8,
    frameCount: 19,
  },
  {
    id: "PPW",
    title: "Personal Portfolio Website",
    desc: "Description",
    source: require("../assets/PPWSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 6,
    frameCount: 5,
  },
  {
    id: "DSE",
    title: "Document Search Engine",
    desc: "Description",
    source: require("../assets/DSESprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 4,
    frameCount: 9,
  },
  {
    id: "SD",
    title: "Shape Drawer",
    desc: "Description",
    source: require("../assets/SDSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 4,
    fps: 8,
    frameCount: 19,
  },
  {
    id: "SM",
    title: "String Manipulator",
    desc: "Description",
    source: require("../assets/SManipSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 2,
    frameCount: 11,
  },
  {
    id: "RPC",
    title: "Rock Paper Scissors",
    desc: "Description",
    source: require("../assets/RPCSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 5,
    frameCount: 10,
  },
  {
    id: "TCP",
    title: "Three Card Poker",
    desc: "Description",
    source: require("../assets/TCPSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 4,
  },
  {
    id: "CTCA",
    title: "Chicago Traffic Camera Analysis",
    desc: "Description",
    source: require("../assets/TrafficLightSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 3,
  },
  {
    id: "LLCV",
    title: "Linked List & Circular Vector",
    desc: "Description",
    source: require("../assets/LLSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 5,
  },
  {
    id: "BST",
    title: "Binary Search Tree",
    desc: "Description",
    source: require("../assets/BSTSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 5,
  },
  {
    id: "H",
    title: "Hashmap",
    desc: "Description",
    source: require("../assets/HashmapSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 6,
  },
  {
    id: "CS",
    title: "Coming Soon...",
    desc: "Description",
    source: require("../assets/Basketball.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 4,
    fps: 10,
    frameCount: 20,
  },
];

export default function LevelScreen({ navigation }: levelScreenProp) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.id === selectedProject);

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <Text style={styles.textTitle}>Project History:</Text>

        <Modal visible={!!activeProject} transparent>
          <Pressable 
                style={styles.modalContainer} 
                onPress={() => setSelectedProject(null)}
          >
            <Pressable 
            style={styles.modalBox}
            onPress={() => {}}
            >

                {activeProject && (
                <ProjectContent
                    titleLabel={activeProject.title}
                    label={activeProject.desc}
                    source={activeProject.source}
                    frameWidth={activeProject.frameWidth}
                    frameHeight={activeProject.frameHeight}
                    columns={activeProject.columns}
                    fps={activeProject.fps}
                    frameCount={activeProject.frameCount}
                />
                )}

            </Pressable>
          </Pressable>
        </Modal>

        <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
          {projects.map((p) => (
            <LevelButton
              key={p.id}
              label={p.title}
              onPress={() => setSelectedProject(p.id)}
            />
          ))}
        </ScrollView>

        {/* Bottom navigation */}
        <View style={styles.bottomContainer}>
          <GameButton
            label="Back"
            labelHovered="To Menu"
            size="small"
            onPress={() => navigation.navigate("Home")}
          />
          <GameButton
            label="Next"
            labelHovered="To Resume"
            size="small"
            onPress={() => navigation.navigate("Resume")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.backgroundB,
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 25,
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
    modalBox: {
    width: "50%",
    height: "70%",
    backgroundColor: Colors.dark.backgroundA,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  scrollArea: {
    flex: 1,
    width: "40%",
    backgroundColor: Colors.dark.backgroundA,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    flexShrink: 1,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
    margin: 5,
  },
  textTitle: {
    color: Colors.dark.ccText,
    fontSize: 20,
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
    margin: 5,
  },
});

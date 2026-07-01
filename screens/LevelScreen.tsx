import { View, Text, StyleSheet, ScrollView, Pressable, Modal, useWindowDimensions } from "react-native";
import { useState } from "react";
import { GameButton } from "../components/UI/GameButton";
import { LevelButton } from "../components/UI/LevelButton";
import { ProjectContent } from "../components/UI/ProjectContent";
import { Colors, Fonts } from "../constants/theme";
import { useTheme } from "../components/ThemeProvider";

type levelScreenProp = {
  navigation: any;
};

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
    hyperlinkLabel: "https://github.com/ryanvincoy11/Magic-Missile-Wizard-Duel",
  },
  {
    id: "PPW",
    title: "Personal Portfolio Website",
    desc: "Description: This is the website you are on right now! It was built using typescript and React framework"
    +" to showcase projects from my GitHub repository and a more in-depth description of me and my skills compared "
    +"to my resume. Additionally, this website was deployed on Vercel. I also used version control software like Git."
    +" For the 2D Sprite animations, I used Piskel app to draw 2D sprites and exported the png files. From there, "
    +"I created a component which takes those png files and turns them into an animation. I didn't want to create a"
    +" basic portfolio website so I created the theme of retro video games since video games have been a big inspiration"
    +" on my life. ",
    source: require("../assets/PPWSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 6,
    frameCount: 5,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Personal-Portfolio-Website",
  },
  {
    id: "DSE",
    title: "Document Search Engine",
    desc: "Description: This program was written in C++ and it takes user input and tokenizes it which is then used to efficiently search"
    +" a document for those words and return the documents that contain the word. The program also supports "
    +"complex set notation similar to Google's special notation for difference, union, and intersection.",
    source: require("../assets/DSESprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 4,
    frameCount: 9,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Document-Search-Engine",
  },
  {
    id: "SD",
    title: "Shape Drawer",
    desc: "Description: This program was written in GO and it takes user input to create .ppm files which can then be viewed graphically "
    +"via an image viewer specifically for .ppm files. The program uses computer graphic techniques to figure out which colored pixel "
    +"goes where for the desired shape, size, and color.",
    source: require("../assets/SDSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 4,
    fps: 8,
    frameCount: 19,
    hyperlinkLabel: "https://github.com/ryanvincoy11/ShapeDrawer",
  },
  {
    id: "SM",
    title: "String Manipulator",
    desc: "Description: This program was written in F# and it manipulates strings via recursive and higher-order functions. "
    +"The program showcases functional programming and uses F# higher-order functions like List.filter.",
    source: require("../assets/SManipSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 2,
    frameCount: 11,
    hyperlinkLabel: "https://github.com/ryanvincoy11/FSharp-String-Manipulator",
  },
  {
    id: "RPC",
    title: "Rock Paper Scissors",
    desc: "Description: This project contains the code which Arduino microcontrollers ran in to play Rock Paper Scissors with "
    +"the computer which has a random mode and a thinking mode which receives the previous moves that the player made and comes "
    +"up with the next best move. Also in the repository is an image of the circuit made using TinkerCAD and how each Arduino "
    +" connects with each other and their corresponding devices like LCD or buttons.",
    source: require("../assets/RPCSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 3,
    fps: 5,
    frameCount: 10,
    hyperlinkLabel: "https://github.com/ryanvincoy11/RockPaperScissors",
  },
  {
    id: "TCP",
    title: "Three Card Poker",
    desc: "Description: This project contains both the server-side and client-side code for a Three Card Poker game. Both code was "
    +"written in Java and utilizes the MVC design pattern. JavaFX was used to create the GUIs and multithreading is used to have the "
    +"server communicate with multiple clients. To create this project, I created wireframes and class diagrams to help me design the code.",
    source: require("../assets/TCPSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 4,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Three-Card-Poker",
  },
  {
    id: "CTCA",
    title: "Chicago Traffic Camera Analysis",
    desc: "Description: This project contains two Python programs, one that converts the CSV files which contain data for speed "
    +"and red-light cameras across Chicago into databases that the other program can read and analyze the databases using "
    +"SQLite queries. Alongside using sqlite3, this program also can visualize and analyze this data using mathplotlib.",
    source: require("../assets/TrafficLightSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 3,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Chicago-Traffic-Camera-Analysis",
  },
  {
    id: "LLCV",
    title: "Linked List & Circular Vector",
    desc: "Description: This project contains two classes for the linked list and circular vector data structure and was written in C++"
    +". Each data structure was implemented to have their optimal Big-O time complexeties. Along with functions for the data strucutres,"
    +" both classes have their own test suites which were created using Google Tests.",
    source: require("../assets/LLSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 5,
    hyperlinkLabel: "https://github.com/ryanvincoy11/LinkedList-and-Circular-Vectors",
  },
  {
    id: "BST",
    title: "Binary Search Tree",
    desc: "Description: This program contains the class for the binary search tree data structure and was written in C++."
    +" This project utilizes pointers and time efficient algorithms to have optimal time complexities. Also, showcased is "
    +"deallocation for memory when unused. This program also contains a test suite which was implemented using Google Tests.",
    source: require("../assets/BSTSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 5,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Binary-Search-Tree",
  },
  {
    id: "H",
    title: "Hashmap",
    desc: "Description: This program contains the class for the hashmap data structure and was written in C++. "
    +"The hashmap data strucure was implemented using an array for the buckets and to avoid the collision problem, "
    +"each bucket is a linked list. To keep an optimal time complexity for searching through the hashmap, the hashmap"
    +" will resize and move elements into the new correct location that the hashing function gives it. This program also "
    +"contains test cases written using the Google Tests framework.",
    source: require("../assets/HashmapSprite.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 2,
    fps: 1,
    frameCount: 6,
    hyperlinkLabel: "https://github.com/ryanvincoy11/Hashmap",
  },
  {
    id: "CS",
    title: "Coming Soon...",
    desc: "Description: The next project that I will be working on is a UML Diagram CAD application "
    +"which Software Engineers can use to easily create UML Diagrams like class or use-case diagrams.",
    source: require("../assets/Basketball.png"),
    frameWidth: 256,
    frameHeight: 256,
    columns: 4,
    fps: 10,
    frameCount: 20,
    hyperlinkLabel: "https://github.com/ryanvincoy11",
  },
];


export default function LevelScreen({ navigation }: levelScreenProp) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { theme } = useTheme();
  const colors = Colors[theme];
  const { width: screenWidth } = useWindowDimensions();

  const isMobile = screenWidth < 700;

  const activeProject = projects.find((p) => p.id === selectedProject);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundB }]}>
      <View
        style={[
          styles.insideContainer,
          {
            margin: isMobile ? 10 : 25,
            paddingHorizontal: isMobile ? 10 : 0,
          },
        ]}
      >
        <Text
          style={[
            styles.textTitle,
            {
              color: colors.ccText,
              fontSize: isMobile ? 18 : 20,
              marginBottom: isMobile ? 10 : 5,
            },
          ]}
        >
          Project History:
        </Text>

        {/* Modal */}
        <Modal visible={!!activeProject} transparent animationType="fade">
          <Pressable
            style={styles.modalContainer}
            onPress={() => setSelectedProject(null)}
          >
            <Pressable
              style={[
                styles.modalBox,
                {
                  backgroundColor: colors.backgroundA,
                  width: isMobile ? "90%" : "60%",
                  height: isMobile ? "80%" : "70%",
                  padding: isMobile ? 10 : 20,
                },
              ]}
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
                  hyperlinkLabel={activeProject.hyperlinkLabel}
                />
              )}
            </Pressable>
          </Pressable>
        </Modal>

        {/* Scrollable Project List */}
        <ScrollView
          style={[
            styles.scrollArea,
            {
              backgroundColor: colors.backgroundA,
              width: isMobile ? "95%" : "40%",
              maxHeight: isMobile ? "60%" : "70%",
            },
          ]}
          contentContainerStyle={[
            styles.scrollContent,
            {
              paddingBottom: isMobile ? 30 : 20,
            },
          ]}
        >
          {projects.map((p) => (
            <LevelButton
              key={p.id}
              label={p.title}
              onPress={() => setSelectedProject(p.id)}
            />
          ))}
        </ScrollView>

        {/* Bottom navigation */}
        <View
          style={[
            styles.bottomContainer,
            {
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 10 : 0,
              marginTop: isMobile ? 20 : 0,
            },
          ]}
        >
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
  },
  insideContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 10,
  },
  modalBox: {
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
  },
  scrollArea: {
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 8,
  },
  scrollContent: {
    alignItems: "center",
    margin: 5,
  },
  textTitle: {
    fontFamily: Fonts.menu,
    borderBottomWidth: 4,
    borderBottomColor: "white",
    paddingBottom: 4,
  },
});

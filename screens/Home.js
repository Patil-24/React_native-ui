import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome6,
  FontAwesome5,
} from "@expo/vector-icons";

const HomeScreen = () => {
  const [isEducationModalVisible, setIsEducationModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Anything");

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const classes = [
    { id: 1, name: "Class 1" },
    { id: 2, name: "Class 2" },
    { id: 3, name: "Class 3" },
    { id: 4, name: "Class 4" },
    { id: 5, name: "Class 5" },
    { id: 6, name: "Class 6" },
    { id: 7, name: "Class 7" },
    { id: 8, name: "Class 8" },
    { id: 9, name: "Class 9" },
    { id: 10, name: "Class 10" },
  ];

  const subjects = [
    { id: 1, name: "Hindi" },
    { id: 2, name: "English" },
    { id: 3, name: "History" },
    { id: 4, name: "Mathematics" },
    { id: 5, name: "Science" },

    // Add more subjects as needed
  ];

  const handleSelectClass = (className) => {
    setSelectedClass(className);
    setSelectedSubject(null); // Reset selected subject
  };

  const handleSelectSubject = (subjectName) => {
    setSelectedSubject(subjectName);
  };

  const handleSelect = () => {
    console.log("Selected Class:", selectedClass);
    console.log("Selected Subject:", selectedSubject);
    setIsEducationModalVisible(false);
  };
  const renderItem = ({ item, onPress, isSelected }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, isSelected && styles.selectedItem]}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderClassItem = ({ item }) =>
    renderItem({
      item,
      onPress: () => handleSelectClass(item.name),
      isSelected: selectedClass === item.name,
    });

  const renderSubjectItem = ({ item }) =>
    renderItem({
      item,
      onPress: () => handleSelectSubject(item.name),
      isSelected: selectedSubject === item.name,
    });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => console.log("Menu button pressed")}
          style={styles.icon}
        >
          <Ionicons name="menu-outline" size={24} color="black" />
          <Text style={styles.screenName}>Swan</Text>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => console.log("Add button pressed")}
            style={styles.icon}
          >
            <Ionicons name="add-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Edit button pressed")}
            style={styles.icon}
          >
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/home.png")} style={styles.image} />
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          onPress={() => handleOptionSelect("Anything")}
          style={[
            styles.card,
            selectedOption === "Anything" && styles.selectedCard,
            {
              backgroundColor:
                selectedOption === "Anything" ? "#4285F4" : "#dedcdc",
            },
          ]}
        >
          <View>
            <View style={{ justifyContent: "center", marginBottom: 16 }}>
              <Text
                style={{
                  color: selectedOption === "Anything" ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Anything.
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <AntDesign name="downcircle" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOptionSelect("Education")}
          style={[
            styles.card,
            selectedOption === "Education" && styles.selectedCard,
            {
              backgroundColor:
                selectedOption === "Education" ? "#fc6330" : "#dedcdc",
            },
          ]}
        >
          <View>
            <View style={{ justifyContent: "center", marginBottom: 16 }}>
              <Text
                style={{
                  color: selectedOption === "Education" ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Education
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: selectedOption === "Education" ? "white" : "black",
                }}
              >
                Specialization
              </Text>
              <Ionicons name="school" size={24} color="white" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleOptionSelect("Meditation")}
          style={[
            styles.card,
            selectedOption === "Meditation" && styles.selectedCard,
            {
              backgroundColor:
                selectedOption === "Meditation" ? "#0b8c3d" : "#dedcdc",
            },
          ]}
        >
          <View>
            <View style={{ justifyContent: "center", marginBottom: 16 }}>
              <Text
                style={{
                  color: selectedOption === "Meditation" ? "white" : "black",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Meditation
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: selectedOption === "Meditation" ? "white" : "black",
                }}
              >
                Specialization
              </Text>
              <MaterialCommunityIcons
                name="meditation"
                size={24}
                color="white"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {selectedOption === "Anything" && (
        <View style={styles.searchContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#dedcdc",
              paddingHorizontal: 20,
              alignItems: "center",
              // borderRadius: 30,
              paddingVertical: 4,
              // paddingHorizontal: 20,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <View>
              <TextInput
                style={styles.searchInput}
                placeholder="Search Answers"
                editable={false}
                selectTextOnFocus={false}
                placeholderTextColor={"black"}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => console.log("Search button pressed")}
                style={styles.searchIcon}
              >
                <FontAwesome6 name="image" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Voice search button pressed")}
                style={styles.searchIcon}
              >
                <FontAwesome5 name="microphone" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {/* Arrow Right Icon */}
            <TouchableOpacity
              onPress={() => console.log("Arrow right button pressed")}
              style={[
                styles.searchIcon,
                {
                  marginLeft: 10,
                  marginBottom: 20,
                  backgroundColor: "#4f4fdb",
                  borderRadius: 50,
                },
              ]}
            >
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {selectedOption === "Education" && (
        <TouchableOpacity
          onPress={() => setIsEducationModalVisible(true)}
          style={styles.selectButton}
        >
          <Text style={styles.selectButtonText}>Select class & Subject</Text>
        </TouchableOpacity>
      )}
      {selectedOption === "Meditation" && (
        <TouchableOpacity
          onPress={() => console.log("Meditation button pressed")}
          style={styles.meditationButton}
        >
          <Text style={styles.meditationButtonText}>Meditation Section</Text>
        </TouchableOpacity>
      )}
      {selectedOption === "Anything" && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text>Suggestions</Text>
        </View>
      )}
      {selectedOption === "Education" && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text>
            {selectedClass && selectedSubject
              ? "Class : " + selectedClass + " & " +"Subject : "+ selectedSubject
              : null}
          </Text>
        </View>
      )}
      {selectedOption === "Meditation" && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text> </Text>
        </View>
      )}

      <Modal
        isVisible={isEducationModalVisible}
        style={styles.modal}
        onBackdropPress={() => setIsEducationModalVisible(false)}
      >
        <View style={styles.educationModalContent}>
          <View style={styles.contentContainer}>
            <View style={[styles.listContainer, { width: "30%" }]}>
              <Text style={styles.sectionHeader}>Classes:</Text>
              <FlatList
                data={classes}
                renderItem={renderClassItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
            <View style={[styles.listContainer, { width: "70%" }]}>
              <Text style={styles.sectionHeader}>Subjects:</Text>
              <FlatList
                data={subjects}
                renderItem={renderSubjectItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
          </View>
          <TouchableOpacity onPress={handleSelect} style={styles.selectButtonm}>
            <Text style={styles.selectButtonTextm}>Select</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
    padding: 10,
  },

  screenName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 600,
    height: 600,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  card: {
    width: "30%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  selectedCard: {
    backgroundColor: "#E0E0E0",
  },
  modal: {
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginBottom: 120,
  },
  educationModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: "row",
  },
  listContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginBottom: 8,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: "#ADD8E6",
  },
  itemText: {
    fontSize: 16,
  },
  flatListContent: {
    flexGrow: 1,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  selectButtonm: {
    backgroundColor: "#fc6330",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  selectButtonTextm: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  selectButton: {
    backgroundColor: "#fc6330",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 10,
    alignSelf: "center",
  },
  selectButtonText: {
    color: "#fc6330",
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  selectButton: {
    backgroundColor: "#4f4fdb",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  selectButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // marginHorizontal: 20,
    // marginBottom: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5,
  },
  searchInput: {
    // flex: 1,
    color: "#ffffff",
    marginLeft: 10,
  },
  searchIcon: {
    // backgroundColor: "#0F9D58",
    padding: 5,
    marginLeft: 10,
    // borderRadius: 50,
  },
  selectButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    // borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5,
  },
  selectButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  meditationButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    // borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 5,
  },
  meditationButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;

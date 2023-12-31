import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Modal from "./components/Modal";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    if (textValue === "") {
      return;
    }
    console.log("agrega elemento correctamente!");
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    console.log(itemSelected);
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add New Item"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <View style={styles.button}>
          <Button title="+" color={"#000"} onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: "#3A3E7A",
  },
  title: {
    fontSize: 35,
    fontWeight: "800",
    marginBottom: 25,
    color: "#fff",
  },
  inputContainer: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 12,
  },
  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#fe6855",
    shadowColor: "#fe6855",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: "#fff",
    fontWeight: "600",
    fontVariant: "no-common-ligatures",
  },
  button: {
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffee00",
    borderRadius: 5,
  },
});

import {
  Button,
  Modal as NewModal,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const Modal = ({ modalVisible, onHandleDelete }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalTitle}>Delete!</Text>
          </View>
          <View>
            <Text style={styles.modalMessage}>
              Are you sure you want to delete the item?
            </Text>
          </View>
          <View style={styles.modalButton}>
            <Button title="Confirm" color={"#fff"} onPress={onHandleDelete} />
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    color: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "800",
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: "#10CD19",
    color: "#fff",
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 15,
  },
});

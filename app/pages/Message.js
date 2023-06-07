import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function Message() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Toast Message",
      text2: "This is the message goes",
      autoHide: true,
    });
  };
  return (
    <View>
      <Text style={{ fontSize: 40, margin: 40, color: "black" }}>
        Toast Mensajes
      </Text>
      <Button title="Mostrar" onPress={showToast} />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  loginScreenButton: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#3C7FDA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

// import React, { useState } from "react";
// import {View, Text, TouchableOpacity, StyleSheet,} from "react-native";

// export default function App() {
//   const [cardColor, setCardColor] = useState("#3498db");

//   const changeColor = () => {
//     const randomColor =
//       "#" + Math.floor(Math.random() * 16777215).toString(16);

//     setCardColor(randomColor);
//   };

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.card,
//           { backgroundColor: cardColor },
//         ]}
//       >
//         <Text style={styles.cardText}>
//           React Native Card
//         </Text>
//       </View>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={changeColor}
//       >
//         <Text style={styles.buttonText}>
//           Change Color
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   card: {
//     width: 250,
//     height: 150,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   cardText: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "#333",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import {View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Alert,} from "react-native";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    Alert.alert("Success", "Signed in successfully");

    setModalVisible(false);
    setSignedIn(true);

    // Clear password after sign in
    setPassword("");
  };

  // After Sign In Screen
  if (signedIn) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.hiText}>
          Hi, {username}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Phishing Detection System
      </Text>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Sign In
            </Text>

            {/* Username */}
            <TextInput
              placeholder="Enter Username"
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />

            {/* Password */}
            <TextInput
              placeholder="Enter Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            {/* Sign In Inside Modal */}
            <TouchableOpacity
              style={[
                styles.modalButton,
                !(username && password) &&
                  styles.disabledButton,
              ]}
              disabled={!(username && password)}
              onPress={handleSignIn}
            >
              <Text style={styles.buttonText}>
                Sign In
              </Text>
            </TouchableOpacity>

            {/* Cancel Button */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },

  signInButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  modalButton: {
    backgroundColor: "#28a745",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  disabledButton: {
    backgroundColor: "gray",
  },

  cancelButton: {
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  hiText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
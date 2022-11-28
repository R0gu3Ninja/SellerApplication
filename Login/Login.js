import { React, Button } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  console.log("Inside onGoogleButtonPress method");
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const Login = () => {
  GoogleSignin.configure({
    webClientId:
      "238728598242-pj30qnorftvbnqokhb9i7m1ci14pb34r.apps.googleusercontent.com",
  });
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  function onLogOutPress() {
    // Check if your device supports Google Play
    console.log("Inside Logout method");
    setUser();
    GoogleSignin.signOut();
    console.log("Inside signOut method");
    // Create a Google credential with the token
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <GoogleSigninButton
          title="Google Sign-In"
          onPress={() =>
            onGoogleButtonPress().then(() => {
              console.log("Signed in with Google!");
            })
          }
        />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title="LogOut" onPress={onLogOutPress} />
    </View>
  );
};

export default Login;

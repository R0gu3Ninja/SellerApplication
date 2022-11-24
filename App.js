import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import CategoryDisplayScreen from "./Screens/CategoryDisplayScreen";
import HomeScreen from "./Screens/HomeScreen";
import HeaderIcons from "./Components/HeaderIcons";
import logo from "./local.jpg";
import WishList from "./Components/WishList";
import Cart from "./Components/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./Components/AccountScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        headerRight: () => {
          return (
            <View style={styles.headerIcons}>
              <HeaderIcons iconname="cart" />
              <HeaderIcons iconname="heart-outline" />
              <HeaderIcons iconname="search" />
            </View>
          );
        },
      }}
    >
      <Drawer.Screen
        name="Local"
        component={HomeScreenTabs}
        options={{ headerShown: true }}
      />
      <Drawer.Screen name="Article" component={AccountScreen} />
    </Drawer.Navigator>
  );
};
const HomeScreenTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Accounts" component={AccountScreen} />
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "",
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <View style={styles.headerIcons}>
                  <HeaderIcons iconname="cart" />
                  <HeaderIcons iconname="heart-outline" />
                  <HeaderIcons iconname="search" />
                </View>
              );
            },
            headerLeft: () => {
              return (
                <View style={styles.logo}>
                  <Image style={styles.image} source={logo} />
                  <Text style={styles.logoText}>Local</Text>
                </View>
              );
            },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreenDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDisplayScreen"
            component={ProductDisplayScreen}
          />
          <Stack.Screen
            name="CategoryDisplayScreen"
            component={CategoryDisplayScreen}
          />
          <Stack.Screen name="WishList" component={WishList} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  headerIcons: {
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
  },
  logo: { flexDirection: "row" },
  logoText: { fontSize: 20 },
  image: {
    width: 30,
    height: 30,
    maxHeight: 30,
    borderRadius: 400 / 2,
    justifyContent: "flex-start",
    padding: 10,
  },
});

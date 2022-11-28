import "react-native-gesture-handler";
import "expo-dev-client";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import CategoryDisplayScreen from "./Screens/CategoryDisplayScreen";
import ShopDisplayScreen from "./Screens/ShopDisplayScreen";
import HomeScreen from "./Screens/HomeScreen";
import HeaderIcons from "./Components/HeaderIcons";
import logo from "./local.jpg";
import WishList from "./Components/WishList";
import Cart from "./Components/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AccountScreen from "./Components/AccountScreen";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import globalStore from "./Store/index";
import LogoutScreen from "./Login/LogoutScreen";
import PhoneAuth from "./Login/PhoneAuth";
import Login from "./Login/Login";
import Camera from "./Camera/Camera";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenDrawer = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{
        headerRight: () => {
          return (
            <View style={styles.headerIcons}>
              <HeaderIcons
                iconname="notifications"
                onPress={() => navigation.navigate("Cart")}
              />
              <HeaderIcons
                iconname="heart-outline"
                onPress={() => navigation.navigate("WishList")}
              />
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
      <Drawer.Screen name="Logout" component={PhoneAuth} />
      <Drawer.Screen name="Orders" component={Camera} />
      <Drawer.Screen name="Profile" component={Camera} />
      <Drawer.Screen name="Support" component={Camera} />
      <Drawer.Screen name="Contactus" component={Camera} />
    </Drawer.Navigator>
  );
};
const HomeScreenTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Foundation name="home" size={30}></Foundation>;
          },
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountScreen}
        options={() => ({
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={() => ({
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color="black"
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          tabBarIcon: () => {
            return <Foundation name="shopping-cart" size={30}></Foundation>;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <Provider store={globalStore}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: "",
              headerTitleAlign: "center",
              headerRight: () => {
                return (
                  <View style={styles.headerIcons}>
                    <HeaderIcons iconname="notifications" />
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
            <Stack.Screen
              name="ShopDisplayScreen"
              component={ShopDisplayScreen}
            />
            <Stack.Screen name="WishList" component={WishList} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Camera" component={Camera} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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

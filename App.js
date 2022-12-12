import "react-native-gesture-handler";
import "expo-dev-client";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import AddProductImages from "./SellerComponents/AddProductImages";
import HomeScreen from "./Screens/HomeScreen";
import HeaderIcons from "./Components/HeaderIcons";
import logo from "./local.jpg";
import Cart from "./Components/Cart";
import ShirtUploadDetails from "./SellerComponents/ShirtUploadSection/ShirtUploadDetails";
import TShirtUploadDetails from "./SellerComponents/TShirtUploadSection/TShirtUploadDetails";
import JeansUploadDetails from "./SellerComponents/JeansUploadSection/JeansUploadDetails";
import SareeUploadDetails from "./SellerComponents/SareeUploadSection/SareeUploadDetails";
import KurtasUploadDetails from "./SellerComponents/KurtasUploadSection/KurtasUploadDetails";
import TopsUploadDetails from "./SellerComponents/TopsUploadSection/TopsUploadDetails";
import ShortsUploadDetails from "./SellerComponents/ShortsUploadSection/ShortsUploadDetails";
import TracksUploadDetails from "./SellerComponents/TracksUploadSection/TracksUploadDetails";
import TrousersUploadDetails from "./SellerComponents/TrousersUploadSection/TrousersUploadDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import AccountScreen from "./Components/AccountScreen";
import {
  Foundation,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Provider } from "react-redux";
import globalStore from "./Store/index";
import Camera from "./Camera/Camera";
import Fetch from "./Components/Fetch";
import RatingsSection from "./Components/RatingsSection";
import FireTest from "./Components/FireTest";
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
                iconname="cart"
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

      <Drawer.Screen name="Profile" component={Camera} />
      <Drawer.Screen name="Orders" component={RatingsSection} />
      <Drawer.Screen name="Support" component={Fetch} />
      <Drawer.Screen name="Contactus" component={FireTest} />
      <Drawer.Screen name="Logout" component={RatingsSection} />
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
        name="Orders"
        component={AccountScreen}
        options={() => ({
          tabBarIcon: () => {
            return (
              <SimpleLineIcons name="social-dropbox" size={24} color="black" />
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

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <View style={styles.headerIcons}>
                <HeaderIcons
                  iconname="cart"
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
          headerLeft: () => {
            return (
              <View style={styles.logo}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.logoText}>Local</Text>
              </View>
            );
          },
        })}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreenDrawer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDisplayScreen"
          component={ProductDisplayScreen}
        />
        <Stack.Screen
          name="JeansUploadDetails"
          component={JeansUploadDetails}
        />
        <Stack.Screen
          name="TShirtUploadDetails"
          component={TShirtUploadDetails}
        />
        <Stack.Screen
          name="ShirtUploadDetails"
          component={ShirtUploadDetails}
        />
        <Stack.Screen
          name="SareeUploadDetails"
          component={SareeUploadDetails}
        />
        <Stack.Screen
          name="TrousersUploadDetails"
          component={TrousersUploadDetails}
        />
        <Stack.Screen name="TopsUploadDetails" component={TopsUploadDetails} />
        <Stack.Screen
          name="KurtasUploadDetails"
          component={KurtasUploadDetails}
        />
        <Stack.Screen
          name="ShortsUploadDetails"
          component={ShortsUploadDetails}
        />
        <Stack.Screen
          name="TracksUploadDetails"
          component={TracksUploadDetails}
        />

        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="AddProductImages" component={AddProductImages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <>
      <Provider store={globalStore}>
        <MainNavigator />
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

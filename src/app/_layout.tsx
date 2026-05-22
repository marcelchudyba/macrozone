import { Stack } from "expo-router";
import {colors, globalStyles} from "@/styles/global";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: colors.header,
    },
    headerTintColor: "#fff",
  }}>
    <Stack.Screen name="index" options={{
      headerShown: false,
      title: "Home",
    }}/>
    <Stack.Screen name="meals" options={{
      title: "Back",
    }}/>
    <Stack.Screen name="addmeal" options={{
      title: "Add Meal",
    }}/>
  </Stack>;
}

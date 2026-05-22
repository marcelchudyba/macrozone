import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, globalStyles} from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import {Link} from "expo-router";
export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Macrozone</Text>

      <HomeHeader/>
      <Link href='/meals' style={
        globalStyles.href
    }>Go to Meals</Link>
    </ScrollView>
  );
}


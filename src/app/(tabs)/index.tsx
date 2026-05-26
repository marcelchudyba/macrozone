import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, globalStyles} from "@/styles/global";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Macrozone</Text>

      <HomeHeader/>

        <MacroGrid/>
    </ScrollView>
  );
}


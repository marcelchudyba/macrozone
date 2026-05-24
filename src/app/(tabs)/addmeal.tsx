import {Text, ScrollView, View, TextInput, StyleSheet, Pressable} from 'react-native';
import {globalStyles} from "@/styles/global";
import {Link} from "expo-router";

export default function addmeal(){
    return (<ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>Add Meal</Text>
            <TextInput style={styles.input} placeholder="Write the name of your meal"></TextInput>
            <Pressable onPress={()=>{}}>
                <Text>
                    Add Meal
                </Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input:{
        color: "black",
        backgroundColor: "lightgray",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    }
    }

)
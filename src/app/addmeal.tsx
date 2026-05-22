import { Text, ScrollView ,View,TextInput} from 'react-native';
import {globalStyles} from "@/styles/global";
import {Link} from "expo-router";

export default function addmeal(){
    return (<View style={globalStyles.container}>
            <Text style={globalStyles.title}>Add Meal</Text>
        </View>
    )
}
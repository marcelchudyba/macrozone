import { globalStyles } from '@/styles/global';
import { Text, ScrollView } from 'react-native';
import {Link} from "expo-router";

export default function MealsScreen() {
    return (
        <ScrollView style={globalStyles.container}>
            <Text style={globalStyles.title}>All Meals</Text>
            <Link href={"/addmeal"} style={globalStyles.href}>Add Meal</Link>
        </ScrollView>
    );
}
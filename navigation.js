import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { StackScreen } from "react-native-screens";
import WorkOutDetail from "./screens/WorkoutDetail";


const Stack = createNativeStackNavigator();


function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} ></Stack.Screen>
            <Stack.Screen name="WorkoutDetail" component={WorkOutDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigation></StackNavigation>
        </NavigationContainer>
    )
}
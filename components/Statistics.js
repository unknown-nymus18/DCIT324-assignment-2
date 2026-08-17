import { View, StyleSheet, FlatList, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Statistics({ calories, duration, }) {
    const days = ['Sun', "Mon", "Tue", "Wed", "Thu", 'Fri', 'Sat']
    const maxCalorie = Math.max(...calories);
    console.log(maxCalorie);
    return (
        <View style={styles.container}>
            <FlatList
                data={calories}
                horizontal={true}
                scrollEnabled={false}
                contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1, padding: 20, alignItems: 'flex-end', height: 200, }}
                renderItem={({ item, index }) =>
                    <View>
                        <View
                            style={{ height: (item / maxCalorie) * 150, backgroundColor: '#73c2fb', width: 30, borderRadius: 10, }}
                        ></View>
                        <Text style={{ flexDirection: 'row', textAlign: 'center' }}>{days[index]}</Text>
                    </View>
                }
            ></FlatList>

            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 20 }}>
                <Ionicons name="time-outline" size={34} color="black" />
                <Text style={{ fontSize: 20 }}>{duration}</Text>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 300,
        width: "90%",
        margin: 10,
        // backgroundColor: 'red',
        borderRadius: 18,
        borderColor: "#FF6079",
        borderWidth: 1,
    }
})
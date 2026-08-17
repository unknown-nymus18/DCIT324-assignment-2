import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useState } from "react";



export default function WorkoutCard({ title, duration, calories, image }) {
    // const data = { title, duration, calories }
    const { navigate } = useNavigation();

    const [isFav, setFav] = useState(false);
    const date = new Date();

    function favourite() {
        setFav(!isFav);
    }
    return (
        <TouchableOpacity style={[styles.container]} onPress={() => navigate('WorkoutDetail', { title, duration, calories })} activeOpacity={0.8}>
            <View style={{ gap: 10, flexDirection: 'row' }}>
                <Image source={image} style={styles.image}></Image>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <Text style={styles.text}>128</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <ImageBackground source={require('../assets/images/flame.png')} style={{ height: 20, width: 16 }}></ImageBackground>
                <Text style={styles.text}>{`${calories[date.getDay()]} kcal`}</Text>
            </View>
            <View style={styles.fav}>
                {isFav ? <FontAwesome name="bookmark" size={34} color="red" onPress={favourite} /> : <FontAwesome name="bookmark-o" size={34} color="black" onPress={favourite} />}
            </View>
        </TouchableOpacity >
    )
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        borderRadius: 36,
        flexDirection: 'row',
        height: 72,
        width: "100%",
        backgroundColor: "#FF6079",
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        position: 'relative'
    },
    image: {
        height: 56,
        width: 56,
        borderRadius: 100,
    },
    text: {
        color: 'white'
    },
    fav: {
        position: 'absolute',

        right: 16,
        bottom: -20,

        width: 40,
        height: 40,


        alignItems: 'center',
        justifyContent: 'center',

        elevation: 4,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    }
})
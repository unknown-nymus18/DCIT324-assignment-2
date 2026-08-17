import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Statistics from '../components/Statistics';
import { useState } from 'react';

export default function WorkOutDetail() {
    const route = useRoute();
    const { goBack } = useNavigation();
    const { title, duration, calories } = route.params;
    const { top } = useSafeAreaInsets();

    const [started, setStarted] = useState(false);

    const total = calories.reduce((sum, number) => sum + number, 0);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <View style={styles.action}>
                    <Ionicons name="chevron-back-sharp" size={18} color="black" onPress={() => goBack()} selectionColor={"#FF6079"} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{title}</Text>
                <View style={styles.action}>
                    <Entypo name="dots-two-vertical" size={18} color="black" />
                </View>
            </View>
            <View style={styles.main}>
                <Text style={{ justifyContent: "center", fontSize: 30, fontWeight: '700', }}>
                    {`${total} Kcal`}
                </Text>
                <Text>Total Kilocalories</Text>
                <Statistics calories={calories} duration={duration}></Statistics>
                <TouchableOpacity style={[styles.workout, { backgroundColor: started ? 'red' : '#73c2fb', }]} activeOpacity={0.7} onPress={() => {
                    setStarted(!started);
                }}>
                    <Text style={{ fontSize: 15 }}>
                        {started ? "Completed" : "Start workout"}
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        height: 100,
        // backgroundColor: 'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    action: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FF6079"
    },
    main: {
        marginTop: 20,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    workout: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,

        borderRadius: 12,
    }
});

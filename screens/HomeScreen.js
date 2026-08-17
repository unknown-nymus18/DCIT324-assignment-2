// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import WorkoutCard from '../components/WorkoutCard';

export default function HomeScreen() {
    const { navigate } = useNavigation();
    const date = new Date();

    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const insets = useSafeAreaInsets();


    const workouts = [
        {
            id: 1,
            title: 'Morning Run',
            duration: '30 min',
            calories: [320, 280, 450, 390, 510, 420, 350],
            image: require('../assets/images/morning-run.jpg'),
        },
        {
            id: 2,
            title: 'Full Body Workout',
            duration: '45 min',
            calories: [400, 350, 480, 420, 500, 450, 380],
            image: require('../assets/images/body-workout.jpg'),
        },
        {
            id: 3,
            title: 'Upper Body Strength',
            duration: '35 min',
            calories: [300, 280, 350, 320, 390, 360, 310],
            image: require('../assets/images/upper-body-workout.jpg'),
        },
        {
            id: 4,
            title: 'Lower Body Workout',
            duration: '40 min',
            calories: [380, 340, 420, 400, 450, 410, 360],
            image: require('../assets/images/lower-body-workout.jpg'),
        },
        {
            id: 5,
            title: 'HIIT Cardio',
            duration: '25 min',
            calories: [300, 270, 350, 320, 380, 360, 290],
            image: require('../assets/images/cardio.jpg'),
        },
        {
            id: 6,
            title: 'Yoga & Stretching',
            duration: '30 min',
            calories: [150, 130, 180, 160, 190, 170, 140],
            image: require('../assets/images/yoga.jpg'),
        },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <View style={{ gap: 15, flexDirection: 'row' }}>
                    <ImageBackground source={require('../assets/images/avatar.png')} style={{ height: 50, width: 50 }}></ImageBackground>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: "#7F7F7F" }}>Hello, User!</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{formattedDate}</Text>
                    </View>
                </View>
                <View
                    style={{ padding: 10, borderColor: "#FF6079", borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 46, height: 46 }}
                >
                    <EvilIcons name="search" size={24} color="black" />
                </View>
            </View>
            <View style={[styles.main, { paddingTop: (styles.header.height + 20 - insets.top) }]}>
                {/* <WorkoutCard title={"Hello"}></WorkoutCard> */}
                <FlatList
                    data={workouts}
                    keyExtractor={({ item, id }) => id}
                    renderItem={({ item }) => <WorkoutCard title={item.title} duration={item.duration} calories={item.calories} image={item.image}></WorkoutCard>}
                >

                </FlatList>

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
        height: 130,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 10,
        flexDirection: 'row',
        paddingBottom: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // backgroundColor: 'blue',
        alignItems: 'flex-end',
    },
    main: {
        flex: 1,
        width: '100%',
        // paddingTop: 130,
        paddingHorizontal: 20,
        // backgroundColor: 'red'
        // paddingTop: 20,
    },
});

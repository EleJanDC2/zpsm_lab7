import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const NavigationStack = createNativeStackNavigator();
// @ts-ignore
function HomeScreen({navigation}) {
    // @ts-ignore
    return (
        // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Home Screen</Text>
        //     <Button title="Go to Test" onPress={() => navigation.navigate('Test')} />
        // </View>
        <View style={styles.container}>
            <Button
                title="Do ekranu testowego"
                onPress={() => {
                    navigation.navigate('Test')
                }}
            />
            <View style={styles.footer}>
                <Button
                    title="Do ekranu z wynikami"
                    onPress={() => {
                        navigation.navigate('Resoult')
                    }}
                />
            </View>
        </View>
    );
}

// @ts-ignore
function TestScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Test Screen</Text>
            <Button title="Go to Resoult" onPress={() => navigation.navigate('Resoult')} />
        </View>
    );
}

// @ts-ignore
function ResoultScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Resoult Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

function App() {

    const [OpenDrawer, setOpenDrawer] = React.useState(false);

    return (
        <NavigationContainer>
            <NavigationStack.Navigator>
                <NavigationStack.Screen name="Home" component={HomeScreen} />
                <NavigationStack.Screen name="Test" component={TestScreen} />
                <NavigationStack.Screen name="Resoult" component={ResoultScreen} />
            </NavigationStack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: "#000000",
        color: "#ffffff",
        borderRadius: 5,
    },
    footer: {
        width: "100%",
        height: 50,
        backgroundColor: "#eeeeee",
    },
});

// https://reactnavigation.org/docs/drawer-navigator

// https://reactnavigation.org/docs/drawer-layout/

// https://reactnavigation.org/docs/drawer-navigator/


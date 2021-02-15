import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Color } from '../common/styles';
import { TextComponent, ButtonComponent } from '../components';

import Splash from '../../src/screens/Spash';
import Home from '../screens/Home';
import MyScore from '../screens/MyScore';
import MyTrips from '../screens/MyTrips';
import TripDetail from '../screens/TripDetail';
import About from '../screens/About';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name='Splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
            <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerShown: true }} />
            <Stack.Screen name='MyScore' component={MyScore} options={{ title: 'My Scores', headerShown: true }} />
            <Stack.Screen name='MyTrips' component={MyTrips} options={{ title: 'My Trips', headerShown: true }} />
            <Stack.Screen name='TripDetail' component={TripDetail} options={{ title: 'Trip Detail', headerShown: true }} />
            <Stack.Screen name='About' component={About} options={{ title: 'About', headerShown: true }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
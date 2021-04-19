import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import Login from '../pages/Login';
import OnboardingScreen from '../pages/OnboardingScreen';

import StudyTabs from './StudyTabs';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState();

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(Response => {
            if(Response == null){
                AsyncStorage.setItem('alreadyLaunched', 'true');  
                setIsFirstLaunch(true); 
            } else {
                setIsFirstLaunch(false); 
            }
        });
    }, []);

    if(isFirstLaunch == null){
        console.log("1");
        return null;
    } else if(isFirstLaunch == true){
        console.log("2");
        return (
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="OnboardingScreen" component={OnboardingScreen} />
                    <Screen name="Landing" component={Landing} />
                    <Screen name="GiveClasses" component={GiveClasses} />
                    <Screen name="Study" component={StudyTabs} />
                </Navigator>
            </NavigationContainer>
        );
    } else {
        console.log("3");
        return (
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Login" component={Login} />
                    <Screen name="Landing" component={Landing} />
                    <Screen name="GiveClasses" component={GiveClasses} />
                    <Screen name="Study" component={StudyTabs} />
                </Navigator>
            </NavigationContainer>
        );
    }
}

export default AppStack;
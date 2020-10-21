import React from 'react';

import {View, StyleSheet, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = props => {
    let items = [
        {
            navOptionName : 'Home Screen',
            screenToNavigate: 'HomeScreen',
        },
        {
        naviOptionName : 'Setting Screen',
        screenToNavigate: 'SettingScreen',
        },
        {
            naviOptionName:'Logout',
            screenToNavigate: 'logout',
        }
    ];

    const handleClick = (index, screenToNavigate) => {
        if(screenToNavigate == 'logout'){
            props.navigation.toggleDrawer();
            Alert.alert(
                'Logout',
                'Are you sure ? You want to logout ?',
                [
                    {
                        text : 'Cancel',
                        onPress:()=>{
                            return null;
                        },
                    },
                    {
                        text: 'Confirm',
                        onPress: ()=>{
                            AsyncStorage.clear();
                            props.navigation.navigate('Auth');
                            console.log('logout')
                        },
                    },
                ],
                {
                    cancelable: false
                }
            );
        }
        else{
            props.navigation.toggleDrawer();
            globalThis.currentScreenIndex = screenToNavigate;
            props.navigation.navigate(screenToNavigate);
        }
    };
    return (
        <View style= {stylesSidebar.sideMenuContainer}>
            <View style = { stylesSidebar.profileHeader}>
                <Text style ={{fontSize:25, color: ''}}>
                    
                </Text>
            </View>
        </View>
    )
}
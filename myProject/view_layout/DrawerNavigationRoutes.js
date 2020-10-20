import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from './screen_drawer/HomeScreenLayout';
import SettingScreenLayout from './screen_drawer/SettingScreenLayout';
import CustomSidebarMenu from './component/CustomSidebarMenu';
import NavigationDrawerHeader from './component/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
    First:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
            title: 'Home Screen',
            headerLeft: () => <NavigationDrawerHeader navigationProps = {navigation}/>,
            headerStyle:{
                backgroundColor:'',
            },
            headerTintColor:'',
        }),
    },
});

const SecondActivity_StackNavigator = createStackNavigator({
    First: {
        screen:SettingScreenLayout,
        navigationOptions:({navigation})=>({
            title:'Setting Screen',
            headerLeft:() =><NavigationDrawerHeader navigationProps={navigation}/>,
            headerStyle:{
                backgroundColor: '',
            },
            headerTintColor: '',
        }),
    },
});

const DrawerNavigationRoutes = createDrawerNavigator(
    {
        HomeScreen:{
            screen:FirstActivity_StackNavigator,
            navigationOptions:{
                drawerLabel: 'Home Screen',
            },
        },
        SettingScreenLayout:{
            screen:SecondActivity_StackNavigator,
            navigationOptions:{
                drawerLabel:'Setting Screen',
            },
        },
    },
    {
        contentComponent:CustomSidebarMenu,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',

    }

);
export default DrawerNavigationRoutes;
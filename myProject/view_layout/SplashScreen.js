import React, {useState, useEffect} from 'react';

import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import AsyncStorage from  '@react-native-community/async-storage';

const SplashScreen = props =>{

    let [animating, setAnimating]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setAnimating(false);

            AsyncStorage.getItem('user_id').then(value=>
                props.navigation.navigate(
                    value===null ? 'Auth':'DrawerNavigationRoutes'
                )
                );
        },5000);
    },[]);

    return(
        <View style={styles.container}>
            <ActivityIndicator
            animating={animating}
            color="#670099"
            size="large"
            style={styles.activityIndicator}
            />
            <Image
            source={require('../image_asset/logo_login.png')}
            style={{width:50, height:50}}
            />
        </View>
    );

};

export default SplashScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#B759E4'
    },
    activityIndicator:{
        alignItems: 'center',
        height:80,
    }
});
import React from 'react';

import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

const Loading = props => {
    const {loading, ...attributes} =props;
    return(
        <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={()=>{
            console.log('close modal');
        }}>
            <View style ={StyleSheet.modalBackground}>
                <View style={StyleSheet.activityIndicatorWrapper}>
                    <ActivityIndicator animating={loading}/>
                </View>
            </View>
        </Modal>
    );
};

export default Loading;
const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-around',
        backgroundColor:'',
    },
    activityIndicatorWrapper:{
        backgroundColor:'',
        height:100,
        width:100,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    },
})
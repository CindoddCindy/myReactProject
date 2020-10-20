import React, {useState} from 'react';

import{
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
}from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loading from './view_layout/Loading';
const LoginUser = props =>{
    let [userEmail, setUserEmail]=useState('');
    let [userPassword, setUserPassword]=useState('');
    let [loading, setLoading] =useState(false);
    let [errortext,setErrortext]=useState('');

    const handleSubmitPress = ()=> {
        setErrortext('');
        if(!userEmail){
            alert('Email Kosong');
            return;
        }
        if(!userPassword){
            alert('Password Kosong');
            return;
        }
        setLoading(true);
        var dataSend={user_email: userEmail, user_password: userPasswor};
        var formBody =[];
        for (var key in dataToSend){
            var encodedKey = encodeURIComponent(key);
            var encodedValue= encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch('https://aboutreact.herokuapp.com/login.php',{
            method:'POST',
            body:formBody,
            headers:{
                'Content-Type':'apliacation/json',
            },
        }).then(response=>response.json())
            .then(responseJson =>{
                setLoading(false);
                console.log(responseJson);
                if(responseJson.status == 1){
                    AsyncStorage.setItem('user_id',responseJson.data[0].user_id);
                    console.log(responseJson.data[0].user_id);
                    props.navigation.navigate('DrawerNavogationRoutes');

                }else {
                    setErrortext('Email atau id salah');
                    console.log('Email atau password salah');
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);

            });

    };

    return(
        <View style = {StyleSheet.mainBody}>
            <Loading loading={loading}/>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={{marginTop:100}}>
                    <KeyboardAvoidingView enabled>
                        <View style={{alignItems: 'center'}}>
                            {
                                <Image source={require('./image_asset/zona_logo.png')}
                                style={{
                                    width:'50%',
                                    height:100,
                                    resizeMode:'contain',
                                    margin:30,
                                }}
                                />

                            }

                        </View>
                        <View style ={StyleSheet.SectionStyle}>
                            <TextInput
                            styles={styles.inputStyle}
                            onChangeText={userEmail => setUserEmail(userEmail)}
                            underlineColorAndroid=""
                            placeholder="Enter Email"
                            placeholderTextColor=""
                            autoCapitalize="none"
                            keyboardType="email-address"
                            ref={ref =>{
                                this.emailInput = ref;
                            }}
                            returnKeyType="next"
                            onSubmitEditing={()=>
                                this._passwordinput && this.passwordinput.focus()
                            }
                            blurOnSubmit={false}
                            />
                        </View>
                        <View style = {styles.SectionStyle}>
                            <TextInput
                            style={styles.inputStyle}
                            onChangeText={UserPassword => setUserPassword(UserPassword)}
                            underlineColorAndroid=""
                            placeholder="Enter Password"
                            placeholderTextColor=""
                            keyboardType="default"
                            ref={ref =>{
                                this._passwordinput = ref;
                            }}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                            secureTextEntry={true}
                            />
                        </View>
                        {errortext != '' ?(
                            <Text style = {styles.errorTextStyle}>{errortext}</Text>
                        ): null}
                        <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitPress}>
                            <Text style = {styles.butonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        <Text
                        style={styles.registerTextStyle}
                        onPress={()=> props.navigation.navigate('RegisterScreen')}>
                            Belum Punya Akun ? Daftar
                        </Text>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
};
export default LoginUser;

const styles = StyleSheet.create({
    mainBody:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'',
    },
    SectionStyle:{
        flexDirection:'row',
        height:40,
        marginTop:20,
        marginLeft:35,
        marginRight:35,
        margin:10,
    },
    buttonStyle:{
        backgroundColor:"",
        borderWidth:0,
        color:'',
        borderColor:'',
        height:40,
        alignItems:'center',
        borderRadius:30,
        marginLeft:35,
        marginRight:35,
        marginTop:20,
        marginBottom:20,
    },
    butonTextStyle:{
        color:'',
        paddingVertical:10,
        fontSize:16,

    },
    inputStyle:{
        flex:1,
        color:'white',
        paddingLeft:15,
        paddingRight:15,
        borderWidth:1,
        borderRadius:30,
        borderColor:'white',
    },
    registerTextStyle:{
        color:'',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:14,

    },
    errorTextStyle:{
        color:'red',
        textAlign:'center',
        fontSize:14,
    },
});


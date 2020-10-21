import React, {useEffect, useState} from 'react';

import{
    StyleSheet,
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Loading from './component/Loading';

const RegisterScreen = props => {
    let [namaLengkapCustomer, setNamaLengkapCustomer]= useState('');
    let [emailCustomer, setEmailCustomer]= useState('');
    let [noTelpCustomer, setNoTelpCustomer]=useState('');
    let [genderCustomer, setGenderCustomer]=useState('');
    let [tglLahirCustomer, setTanggalLahirCustomer]=useState('');
    let [passwordCustomer, setPasswordCustomer]=useState('');
    let [confimrpasswordCustomer, setConfirmPassCustomer]=useState('');
    let [loading, setLoading] =useState(false);
    let [errortext, setErrorText]=useState('');
    let [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

    const handleSubmitButton = ()=>{
        setErrorText('');
        if(!namaLengkapCustomer){
            alert('Nama Lengkap Kosong');
            return;
        }
        if(!emailCustomer){
            alert('Email Kosong');
            return;
        }
        if(!noTelpCustomer){
            alert('Nomor Telepon Kosong');
            return;
        }

        if(!genderCustomer){
            alert('Gender Kosong');
            return;
        }
        if(!tglLahirCustomer){
            alert('Tanggal Lahir Kosong');
            return;
        }
        if(!passwordCustomer){
            alert('Password Kosong');
            return;

        }
        if(!confimrpasswordCustomer){
            alert('Konfirm Password Kosong');
            return;
        }

        setLoading(true);
        var dataToSend = {
            customerFullName: namaLengkapCustomer,
            customerEmail:emailCustomer,
            customerTelpon:noTelpCustomer,
            customerGender:genderCustomer,
            cutomerBirtDate:tglLahirCustomer,
            customerPassword : passwordCustomer,
            customerConfirmPassword:confimrpasswordCustomer,

        };
        var formBody = [];
        for(var key in dataToSend){
            var encodeKey= encodeURIComponent(key);
            var encodeValue=encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '='+encodeValue);

        }
        formBody = formBody.join('&');
        fetch('',{
            method:'POST',
            body:formBody,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',

            },
        })
        .then(response => response.json())
        .then(responseJson => {
            setLoading(false);
            console.log(responseJson);
            if(responseJson.status == 1){
                setIsRegistrationSuccess(true);
                console.log('');
            }else{
                setErrorText('');
            }

        })
        .catch(error =>{
            setLoading(false);
            console.error(error);
        });

        
    };
    if(isRegistrationSuccess){
        return(
            <View
            style={{
                flex:1,
                backgroundColor:'',
                justifyContent:'',
            }}>
                <Text style={StyleSheet.successTextStyle}>Registrasi Berhasil</Text>
                  <TouchableOpacity
                  style={StyleSheet.buttonStyle}
                  activeOpacity={0.5}
                  onPress={()=> props.navigation.navigate('')} >
                    <Text style = {StyleSheet.buttonTextStyle}>Login</Text> 
                  </TouchableOpacity>
               
            </View>
        );
    }
    return(
        <View style={{flex: 1, backgroundColor: ''}}>
            <Loading loading ={loading}/>
            <ScrollView keyboardShouldPersistTaps = "handled">
                <View style ={{alignItems : 'center'}}>

                </View>
                <KeyboardAvoidingView enabled>
                    <View style = {StyleSheet.SectionStyle}>
                        <TextInput
                        style={StyleSheet.inputStyle}
                        onChangeText={namaLengkapCustomer=> setNamaLengkapCustomer(namaLengkapCustomer)}
                        underlineColorAndroid=""
                        placeholder="Enter Name"
                        placeholderTextColor=""
                        autoCapitalize=""
                        returnKeyType=""
                        onSubmitEditing={()=>
                        this.customerEmail && this.customerEmail.focus()
                        }
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style ={StyleSheet.SectionStyle}>
                        <TextInput
                        style={StyleSheet.inputStyle}
                        onChangeText={emailCustomer => setEmailCustomer(emailCustomer)}
                        underlineColorAndroid=""
                        placeholder=""
                        placeholderTextColor=""
                        keyboardType=""
                        ref={ref =>{
                            this.customerEmail=ref;

                        }}
                        returnKeyType=""
                        onSubmitEditing={()=>this.customerTelpon && this.customerTelpon.focus}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style ={StyleSheet.SectionStyle}>
                        <TextInput
                        style={StyleSheet.inputStyle}
                        onChangeText={emailCustomer => setEmailCustomer(emailCustomer)}
                        underlineColorAndroid=""
                        placeholder=""
                        placeholderTextColor=""
                        keyboardType=""
                        ref={ref =>{
                            this.customerEmail=ref;

                        }}
                        returnKeyType=""
                        onSubmitEditing={()=>this.customerTelpon && this.customerTelpon.focus}
                        blurOnSubmit={false}
                        />
                    </View>
                    <View style ={StyleSheet.SectionStyle}>
                        <TextInput
                        style={StyleSheet.inputStyle}
                        onChangeText={emailCustomer => setEmailCustomer(emailCustomer)}
                        underlineColorAndroid=""
                        placeholder=""
                        placeholderTextColor=""
                        keyboardType=""
                        ref={ref =>{
                            this.customerEmail=ref;

                        }}
                        returnKeyType=""
                        onSubmitEditing={()=>this.customerTelpon && this.customerTelpon.focus}
                        blurOnSubmit={false}
                        />
                    </View> <View style ={StyleSheet.SectionStyle}>
                        <TextInput
                        style={StyleSheet.inputStyle}
                        onChangeText={emailCustomer => setEmailCustomer(emailCustomer)}
                        underlineColorAndroid=""
                        placeholder=""
                        placeholderTextColor=""
                        keyboardType=""
                        ref={ref =>{
                            this.customerEmail=ref;

                        }}
                        returnKeyType=""
                        onSubmitEditing={()=>this.customerTelpon && this.customerTelpon.focus}
                        blurOnSubmit={false}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );



};

export default RegisterUser;
const styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'white',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  });

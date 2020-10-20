import React, {useState} from 'react';

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
                <Text style={StyleSheet.successTextStyle}>
                  <TouchableOpacity
                  style={StyleSheet.buttonStyle}
                  activeOpacity={0.5}
                  onPress={()=> props.navigation.navigate('')} >
                      
                  </TouchableOpacity>
                </Text>
            </View>
        )
    }



}
import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
let styleCss = require('../GlobalStyle');

const EmailVarification = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff', flex:1}}>
      <ScrollView>
        <View>
        <View
          style={{
            marginTop: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/login/logo.png')} />
          <Text style={{color: '#f2ae88', fontSize: 14}}>
            Please Enter Your E-mail Id
          </Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
          <View>
            <Image
              style={{
                zIndex: 1000,
                elevation: 30,
                marginLeft: 20,
                marginTop: 5,
                position: 'absolute',
              }}
              source={require('../../assets/login/email.png')}
            />
            <TextInput style={styleCss.inputStyle} />
          </View>
        </View>
        

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity  style={{justifyContent: 'center', textAlign: 'center'}}>
            <Image
              style={{
                width: 350,
                resizeMode: 'contain',
              }}
              source={require('../../assets/register/button.png')}
            />
            
          </TouchableOpacity>
        </View>

</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailVarification;

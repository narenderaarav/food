import React, { useContext,useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Image,StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';



export const HomeScreen = props => {
   
    return (

        <View style={{ backgroundColor: "white", position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignContent: 'center' }}>
         <Image style={{ zIndex: 100, marginTop:3 }} source={require('../../assets/register/home.png')} /> 
        </View>
    )
};

const styles = StyleSheet.create({
})


export default (HomeScreen);

import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, TextInput, SafeAreaView, Image, ImageBackground, Text, Switch, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';
import AppButton from '../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import { loginActions } from '../actions/login';

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
    <View style={{ marginHorizontal: 20, marginVertical: 1 }}>
        <Text style={{ marginBottom: 3 }}>{label}</Text>
        {children}
        <Text style={{ color: 'red' }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
    </View>
);

const StyledInput = ({ label, formikProps, formikKey, icon, ...rest }) => {
    const inputStyles = {
        borderColor: '#e0e0e0',
        padding: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        textAlign: 'left',
        height: 50,
        width: 300,
        borderWidth: 1,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 8,
        elevation: 20,
        backgroundColor: "#0000",// invisible color
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginTop: -15,
        fontStyle: 'italic'

    }
    const iconStyle = {
        marginTop: 20
    }
        ;

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
    }

    return (
        <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps} icon={icon}>
            <Image style={{ zIndex: 1000, marginLeft: 20,elevation: 30, marginTop: 25, position: "absolute" }} source={require('../../assets/login/email.png')} />
            <TextInput
                style={inputStyles}
                inlineImageLeft='email'
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                {...rest}

            />

        </FieldWrapper>
    );
};


const StyledInputPass = ({ label, formikProps, formikKey, icon, ...rest }) => {
    const inputStyles = {
        borderColor: '#e0e0e0',
        padding: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        textAlign: 'left',
        height: 50,
        width: 300,
        borderWidth: 1,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 8,
        elevation: 20,
        backgroundColor: "#0000",// invisible color
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginTop: -15,
        fontStyle: 'italic'

    }
    const iconStyle = {
        marginTop: 20
    }
        ;

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = 'red';
    }

    return (
        <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps} icon={icon}>
            <Image style={{ zIndex: 1000, elevation: 30, marginLeft: 20, marginTop: 25, position: "absolute" }} source={require('../../assets/login/pass.png')} />
            <TextInput
                style={inputStyles}
                inlineImageLeft='email'
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                {...rest}

            />

        </FieldWrapper>
    );
};

const StyledSwitch = ({ formikKey, formikProps, label, ...rest }) => (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
        <Switch
            value={formikProps.values[formikKey]}
            onValueChange={value => {
                formikProps.setFieldValue(formikKey, value);
            }}
            {...rest}
        />
    </FieldWrapper>
);

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('please enter valid email id')
        //.label('Mobile')
        //.test('len', 'Must be valid mobile numebr', val => val.toString().length >= 10)
        //.typeError('Please enter a valid Mobile Number')
        .required('Please enter a valid email id'),
    password: yup
        .string()
        //.label('Password')
        .required()
       // .min(5, 'Password must have more than 4 characters ')

});

const signUp = ({ values }) => {
    return values;
}






const LoginScreen = props => {
    const [loding, setLoading] = useState(false);
    if (props.loginError) {
        Toast.showWithGravity(props.loginError, Toast.LONG, Toast.CENTER);
    }
    if (props.loginMessage) {
        Toast.showWithGravity(props.loginMessage, Toast.LONG, Toast.CENTER);
    }
    return (
        <SafeAreaView  >

       <ScrollView>
        <View  style={{backgroundColor:'#ffffff', marginTop: 0, justifyContent: 'center', alignItems: 'center' }}>



              

                <Image source={require('../../assets/login/logo.png')} />
                <Text style={{ color: '#f2ae88', fontSize: 25 }}>Welcome</Text>
                <Text style={{ color: '#f2ae88', fontSize: 15 }}>Login to Continoue</Text>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values, actions) => {
                        var user = {};
                        user.email = values.email;
                        user.password = values.password;
                        user.device_token = "dkfjsdlkfjl";
                        user.device_type = "1";
                        user.language = "en";
                        props.logAction(user,props.navigation);
                        actions.setSubmitting(true);

                    }}
                    validationSchema={validationSchema}

                >
                    {formikProps => (
                        <React.Fragment>
                            <StyledInput
                                //label="Mobile"
                                icon={'email'}
                                formikProps={formikProps}
                                formikKey="email"
                                placeholder="Email"


                                autoFocus
                            />
                            <StyledInputPass
                                //label="Password"
                                icon={'pass'}
                                formikProps={formikProps}
                                formikKey="password"
                                placeholder="Password"
                                secureTextEntry
                            />

                            <React.Fragment>
                                <View style={{ flex: 1,justifyContent: 'center', textAlign: "center" , flexDirection: 'row', zIndex: 1000, marginBottom: 0 }}>
                                    <View style={{ width: '5%'}}>
                                    <Image style={{ zIndex: 100, marginTop:3 }} source={require('../../assets/login/remember.png')} /> 
                                    </View>
                                    <View style={{ width: '35%', height: 50,zIndex: 1000}} >
                                        <Text>Remebmber Me</Text>
                                    </View>
                                    <View style={{ width: '35%', height: 50}} ><Text style={{color:'#f2ae88', textAlign:'right'}} onPress={() => {props.navigation.navigate('EmailVarification')}}>Forgot Password?</Text></View>
                                   
                                </View>
                                <View style={{ justifyContent: 'center', textAlign: "center" }}>
                                        <TouchableOpacity style={{ justifyContent: 'center', textAlign: "center" }}  onPress={formikProps.handleSubmit}>
                                            <Image style={{
                                                width: 350,
                                                resizeMode: 'contain'
                                            }} source={require('../../assets/login/button.png')} />
                                        </TouchableOpacity>
                                    
                                    {/*<TouchableOpacity onPress={() => {props.navigation.navigate('Otp')}}>
                                        <View style={{
                                            backgroundColor: '#f2ae88',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 15,
                                            padding: 10,
                                            width: 300,
                                            height: 50,
                                            shadowColor: 'red',
                                            shadowRadius: 16,
                                            shadowOpacity: 10,
                                            shadowOffset: {
                                                width: 300,
                                                height: 50
                                            },
                                            elevation: 12,
                                        }}
                                    >
                                            <Text style={{ color: 'white' }}>Log In</Text>
                                        </View>
                                    </TouchableOpacity>*/}

                                </View>
                                <Text style={{ color: 'red' }}>{formikProps.errors.general}</Text>
                                
                                    <View style={{ flex: 1,justifyContent: 'center', textAlign: "center" , flexDirection: 'row', zIndex: 1000, marginBottom: 10,marginTop:0 }}>
                                    <View style={{  height: 50}} ><Text style={{fontSize:18, color:'#f2ae88'}} onPress={() => {props.navigation.navigate('Register')}}>New User? Sign up</Text></View>    
                                </View>
                                <View style={{ flex: 1,justifyContent: 'center', textAlign: "center" , flexDirection: 'row', zIndex: 1000, marginBottom: 0,marginTop:0 }}>
                                    <View style={{ height: 50}} ><Text style={{fontSize:16, color:'#f2ae88'}}>Continouse as guest</Text></View>    
                                </View>

                                <View style={{ flex: 1,justifyContent: 'center', textAlign: "center" , flexDirection: 'row', zIndex: 1000, marginBottom: 0 }}>
                                    <View style={{ width:'60%', height: 50}} ><Text style={{fontSize:14,justifyContent: 'center', textAlign: "center" , color:"#e6e6e6"}}>By sigining in you have indicate that you have read and agreed on the term and conditions., </Text></View>    
                                </View>
                            </React.Fragment>



                        </React.Fragment>
                    )}
                </Formik>
              
           
        </View>
        </ScrollView>
        </SafeAreaView>
       
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20

    },
    bStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    btnContainer: {
        marginTop: 40,
        alignSelf: 'stretch',
    },
    inputContainer: {
        height: 40,
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    banner: {
        alignSelf: 'stretch'
    }

});


const mapStateToProps = (state) => ({
    loginError: state.loginReducer.loginError,
    loginMessage:state.loginReducer.loginMessage,
    userData:state.loginReducer.userData
})

const actionCreators = {
    logAction: loginActions.loginUserAction,
};

export default connect(mapStateToProps, actionCreators)(LoginScreen);


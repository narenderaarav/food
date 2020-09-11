import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, SafeAreaView, Image, ToastAndroid, Text, Switch, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
import Toast from 'react-native-simple-toast';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { registerActions } from '../actions/registrationAction';

const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
    <View style={{ marginHorizontal: 20, marginVertical: 1 }}>
        <Text style={{ marginBottom: 3 }}>{label}</Text>
        {children}
        <Text style={{ color: 'red' }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
    </View>
);

const StyledInputName = ({ label, formikProps, formikKey, icon, ...rest }) => {
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
            <Image style={{ zIndex: 1000, elevation: 30, marginLeft: 20, marginTop: 25, position: "absolute" }} source={require('../../assets/register/name.png')} />
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

const StyledInputPhone = ({ label, formikProps, formikKey, icon, ...rest }) => {
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
            <Image style={{ zIndex: 1000, elevation: 30, marginLeft: 20, marginTop: 25, position: "absolute" }} source={require('../../assets/register/phone.png')} />
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
            <Image style={{ zIndex: 1000, elevation: 30, marginLeft: 20, marginTop: 25, position: "absolute" }} source={require('../../assets/login/email.png')} />
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
    first_name: yup
        .string()
        //.test('len', 'Must be valid mobile numebr', val => val.toString().length >= 10)
       // .typeError('Please enter a valid Mobile Number')
        .required('Please enter a Name'),
    phone_number: yup
        .number()
        .test('len', 'Must be valid mobile numebr', val => val.toString().length >= 8)
        .typeError('Please enter a valid Mobile Number')
        .required('Please enter a valid mobile number'),
    email: yup
    .string()
        .email('Email is invalid')
        //.label('Password')
        .required('Please enter a valid email id'),
        //.min(4, 'please enter email'),
    password: yup
        .string()
        //.label('Password')
        .required('Please enter password')
        .min(5, 'Password must have more than 5 characters '),
    confirm_password: yup
        .string()
        .required('Please confirm password')
        .min(5, 'Password must have more than 5 characters ')

});

const signUp = ({ values }) => {
    return values;
}


const RegisterScreen = props => {
    const [loding, setLoading] = useState(false);
    if (props.regError) {
        Toast.showWithGravity(props.regError, Toast.LONG, Toast.CENTER);
        //props.clearAlerts();
    }
    if (props.regResponse) {
        Toast.showWithGravity(props.regResponse, Toast.LONG, Toast.CENTER);
        //props.clearAlerts();
    }
    return (
        <SafeAreaView  >

            <ScrollView>
                <View style={{ backgroundColor: '#ffffff', marginTop: 0, justifyContent: 'center', alignItems: 'center' }}>


                    <Image source={require('../../assets/login/logo.png')} />
                    <Text style={{ color: '#f2ae88', fontSize: 25, fontWeight: "bold" }}>Welcome !</Text>
                    <Text style={{ color: '#f2ae88', fontSize: 20 }}>Let's create account for you</Text>

                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        onSubmit={(values, actions) => {
                            /*let formdata = new FormData();
                            formdata.append("first_name;",values.first_name),
                            formdata.append("phone_number", values.userName),
                            formdata.append('email', values.email),
                            formdata.append("password",values.password),
                            formdata.append("device_token", "token"),
                            formdata.append("device_type", "1"),
                            formdata.append("language", "en")*/

                            var user = {};
                            user.first_name = values.first_name;
                            user.last_name = values.first_name;
                            user.phone_number = values.phone_number;
                            user.email = values.email;
                            user.password = values.password;
                            user.confirm_password = values.confirm_password;
                            user.device_token = "dkfjsdlkfjl";
                            user.device_type = "1";
                            user.language = "en";
                            console.log(user);
                            props.registerUserAction(user,props.navigation);
                            actions.setSubmitting(true);

                        }}
                        validationSchema={validationSchema}

                    >
                        {formikProps => (
                            <React.Fragment>
                                <StyledInputName
                                    formikProps={formikProps}
                                    formikKey="first_name"
                                    placeholder="Name"
                                    autoFocus
                                />
                                <StyledInputPhone
                                    formikProps={formikProps}
                                    formikKey="phone_number"
                                    placeholder="Phone"
                                    autoFocus
                                />
                                <StyledInput
                                    //label="Mobile"
                                    icon={'email'}
                                    formikProps={formikProps}
                                    formikKey="email"
                                    placeholder="Email"

                                />
                                <StyledInputPass
                                    formikProps={formikProps}
                                    formikKey="password"
                                    placeholder="Password"
                                    secureTextEntry
                                />

                                <StyledInputPass
                                    formikProps={formikProps}
                                    formikKey="confirm_password"
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                />

                                <React.Fragment>

                                    <View style={{ justifyContent: 'center', textAlign: "center" }}>
                                        <TouchableOpacity style={{ justifyContent: 'center', textAlign: "center" }} onPress={formikProps.handleSubmit}>
                                            <Image style={{
                                                width: 350,
                                                resizeMode: 'contain'
                                            }} source={require('../../assets/register/button.png')}
                                            
                                            />
                                            { /*<View style={{
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
                                                <Text style={{ color: 'white', fontSize: 20, fontWeight: "bold" }}>Sign Up</Text>
                                            </View>*/
                                            }
                                        </TouchableOpacity>

                                    </View>
                                    <Text style={{ color: 'red' }}>{formikProps.errors.general}</Text>
                                    <View style={{ flex: 1, justifyContent: 'center', textAlign: "center", flexDirection: 'row', zIndex: 1000, marginBottom: 0, marginTop: 0 }}>
                                        <View style={{ height: 50 }} onPress={() => {props.navigation.navigate('Login')}}><Text style={{ fontSize: 18, color: '#f2ae88', fontWeight: 'bold' }}>Continoue as a guest</Text></View>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={{ height: 50 }}  onPress={() => {props.navigation.navigate('Login')}}><Text style={{ fontSize: 18, color: '#f2ae88' }}  onPress={() => {props.navigation.navigate('Login')}}>Already a User? Login</Text></View>
                                        </TouchableOpacity>
                                    <View style={{ flex: 1, justifyContent: 'center', textAlign: "center", flexDirection: 'row', zIndex: 1000, marginBottom: 0, marginTop: 0 }}>
                                        <View style={{ height: 50 }} ><Text style={{ fontSize: 16, color: '#f2ae88' }}>I agree to the Terms and Conditions</Text></View>
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
    regError: state.registrationReducer.regError,
    regResponse:state.registrationReducer.regResponse
})

const actionCreators = {
    registerUserAction: registerActions.registerUserAction,
};

export default connect(mapStateToProps, actionCreators)(RegisterScreen);




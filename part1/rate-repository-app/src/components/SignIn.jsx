import Text from './Text';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { View, StyleSheet } from 'react-native';
import { TextInput, Pressable } from 'react-native';
import { Formik, useField } from 'formik';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const styles = StyleSheet.create({
    // separator: {
    //     height: 10,
    // },
    // item: {
    //     backgroundColor: '#1111',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },

    flexContainerA: {
        display: 'flex',
        flexDirection: 'column',

    },
    buttonSignIn: {

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#0366d6',
        padding: 10,
        margin: 12,
        paddingVertical: 20,


    }
});

const initialValues = {
    password: '',
    username: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        // .min(1, 'Weight must be greater or equal to 1')
        .required('Username is required'),
    password: yup
        .string()
        // .min(0.5, 'Height must be greater or equal to 0.5')
        .required('Password is required'),
});


const SignInForm = ({ onSubmit }) => {
  
    return (
        <View style={styles.flexContainerA}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />

            <Pressable onPress={onSubmit} >
                <Text style={styles.buttonText} fontFamily='font'  >Sign in</Text>
            </Pressable>

        </View>
    );
};


const SignIn = () => {

    const navigate = useNavigate()
    const [signIn, result] = useSignIn();
  
    useEffect(() => {
        if ( result.data ) {
          const token = result.data.authenticate.accessToken
          console.log(token, 'token')
          navigate('/')
        }
      }, [result.data]) 
  
    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const newToken = await signIn({ username, password });  
           
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
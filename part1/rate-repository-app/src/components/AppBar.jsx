import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';

import { Route, Routes, Navigate, Link } from 'react-router-native';
import Text from './Text';
import useMe from '../hooks/useMe';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,

        // paddingBottom: 50,

        backgroundColor: '#24292e',
        display: 'flex',
        // flexDirection: 'row',
        //   justifyContent: 'space-evenly'


        // ...
    },
    title: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    // ...
});

const SignInOut = () => {
    const { data, error, loading } = useMe();
    console.log(data)
    if (loading) {
        return (
            <View>
                <Text>
                    loading...
                </Text>
            </View>
        )
    }
    const user = data.me || null


    if (!user) {
        return (
            <>
                < Link to="/signin" >
                    <Text style={styles.title}> Sign In </Text>
                </Link >

            </>
        )
    }
    if (user) {
        return (
            <>
                < Link to="/signout" >
                    <Text style={styles.title}> Sign Out </Text>
                </Link >

            </>
        )
    }
}

const AppBar = () => {

    const [timesPressed, setTimesPressed] = useState(0);
    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }
    const onPressFunction = () => {
        setTimesPressed(current => current + 1)
    }

    return (
        <>
            {/* <Pressable onPress={onPressFunction}> */}

            <View style={styles.container}>
                <ScrollView horizontal>
                    < Link to="/" >
                        <Text style={styles.title}> Repository {textLog}</Text>
                    </Link >
                    {/* 
                        < Link to="/signin" >
                            <Text style={styles.title}> Sign In </Text>
                        </Link > */}
                    <SignInOut />
                </ScrollView>
            </View>

            {/* </Pressable> */}


        </>
    )
};

export default AppBar;
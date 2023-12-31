import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate,  Link } from 'react-router-native';

import RepositoryList from './RepositoryList';
import Text from './Text';

import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>

            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signout" element={<SignOut/>} />
            </Routes>

                {/* <Link to="/profile">
                    <Text>Visit your profile</Text>
                </Link> */}

        </View>
    );
};

export default Main;
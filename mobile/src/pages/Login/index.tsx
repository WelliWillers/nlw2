import React from 'react';
import { KeyboardAvoidingView, Text, View, Platform } from 'react-native';

import styles from './style';

function Login(){
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.login}>Login</Text>
            </View>

        </KeyboardAvoidingView>
    );
}

export default Login;
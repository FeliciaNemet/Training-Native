import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourName = <Text>Felicia</Text>;

    return (
        <View>
            <Text style={styles.textStyle} >Getting started with React Native!</Text>
            <Text style={styles.subStyle}> My name is {yourName}</Text>
        </View>
    );
        
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
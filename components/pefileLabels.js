import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ProfileLabels({icon, labelText}) {
    return(
        <View style={styles.container}>
            {icon}
            <Text style={styles.label}>{labelText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", alignItems: "center", paddingLeft: 15 
    },
    label: {
        paddingLeft: 10, paddingVertical: 5 
    }
})
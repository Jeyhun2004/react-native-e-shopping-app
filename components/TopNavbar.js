import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const TopNavbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Fashion</Text>
            <TouchableOpacity style={styles.basket}><Text style={styles.logo}>Basket</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 40,
        flexDirection: 'row'
    },
    logo:{
        fontSize: 19,
    },
    basket:{
        flex: 1,
        alignItems: 'flex-end',
        fontSize: 20,
    }
});

export default TopNavbar;
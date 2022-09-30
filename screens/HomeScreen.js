import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
  return (
    <SafeAreaView style={styles.safearea}>
        {/* SafeAreaView does not work in my code so I put a personal style*/}
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea: { 
        marginTop: StatusBar.currentHeight
    }
});

export default HomeScreen
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, Pressable, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import styled from 'styled-components';
import Icon from "react-native-remix-icon"

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])
  return (
    <>
      <SafeAreaView style={styles.safearea}>
          {/* SafeAreaView does not work in my code so I put a personal style*/}

          <View style={styles.container}>
              <Image
                source={{
                  uri: "https://links.papareact.com/wru",
                }}
                style={styles.logo}
                />
              <Container>
                <View style={styles.containerText}>
                  <Text style={{color:"lightgrey", fontSize:12}}>Deliver Now!</Text>
                  <Text style={{fontWeight:"bold", fontSize:20}}>Current Location
                  <Icon name='ri-arrow-down-s-line' size={20} color="#00CCBB" />
                  </Text>
                </View>
                <StyledIcon name='ri-user-line' size={30} color="#00CCBB" />
              </Container>
            </View>
            {/* searchBar */}

            <View style={styles.searchBar}>
              <View style={styles.searchBarContainer}>
                <Icon name='ri-search-line' size={20} color="grey" />
                <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
              </View>
              <Icon name='ri-sound-module-line' size={25} color="#00CCBB" />
            </View>
      </SafeAreaView>
    </>
  )
}

const StyledIcon = styled(Icon)`
  &:hover {
    background-color: red;
  }
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  searchBarContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor:"#d9d7d7",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
    safearea: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white",
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo : {
        width: 40,
        height: 40,
        borderRadius:50,
        backgroundColor: "lightgrey"
    },
    containerText: {
      marginLeft: 10
    }
});

export default HomeScreen
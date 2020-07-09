import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, TextInput, Dimensions } from 'react-native';
import Images from '../assets/Images'

const maxWidth = Dimensions.get('window').width
const maxHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    width: maxWidth, 
    height: maxHeight * 0.17,
    borderBottomColor: "#bbb", 
    borderBottomWidth: 0.3,
    backgroundColor: "#000",    
  },
  headerPhoto: {
    width: maxWidth, 
    height: maxHeight * 0.17,
    position: 'absolute',
    opacity: 0.6
  },
  searchBarContainer: {
    alignItems: 'center', 
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: maxHeight * 0.07
  },
  searchBar: {
    textAlign: 'center',
    borderWidth: 0.4,
    borderColor: '#bbb',
    backgroundColor: '#eee',
    color: '#000',
    opacity: 0.7,
    width: maxWidth * 0.9,
    height: maxHeight * 0.04,
    borderRadius: 5
  },
  searchIcon: {
    position: 'absolute',
    width: maxWidth * 0.07,
    height: maxHeight * 0.05,
    opacity: 0.5,
    margin: 5
  }, 
  logo: {
    alignSelf: 'center',
    marginTop: maxHeight * 0.02,
    width: maxWidth * 0.2,
    height: maxHeight * 0.08
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center", 
    width: maxWidth,
    height: maxHeight * 0.83,
    justifyContent: 'space-around'
  }
});

export default function Index() {

  const [ searchValue, setSearchValue ] = useState("pics")

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Image style={styles.headerPhoto} source={Images.headerBackground} />
        <View style={styles.searchBarContainer}>
          <TextInput 
            style={styles.searchBar}
            onChangeText={text => setSearchValue(text)}
            value={searchValue.toLowerCase()}
          />
          <Image style={styles.searchIcon} source={Images.search} resizeMode="contain"/>
        </View>
        <Image style={styles.logo} source={Images.redditLogo} resizeMode="contain" />
      </View>
      <View style={styles.bodyContainer}>
        <Text>BODY</Text>
      </View>
    </View>
  );
}



import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
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
    margin: maxWidth * 0.01
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
    justifyContent: 'space-between'
  }, 
  subRedditInfoContainer: {
    width: maxWidth, 
    height: maxHeight * 0.23,
    flexDirection: 'column',
    alignItems: "center", 
    justifyContent: 'space-around'
  }, 
  subRedditTitleContainer: {
    width: maxWidth,
    paddingHorizontal: maxWidth * 0.05,
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subRedditTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  joinButton: {
    backgroundColor: '#022599',
    width: maxWidth * 0.15,
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 13
  },
  joinPlus: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18,
    marginBottom: maxWidth * 0.006,
    marginRight: maxWidth * 0.006,
  },
  subRedditStatsContainer: {
    paddingHorizontal: maxWidth * 0.05,
    flexDirection: 'column',
    width: maxWidth,
  },
  subRedditStats: {
    fontSize: 12,
    color: "#666",
    textAlign: 'left'
  },
  subRedditTagLine: {
    fontSize: 12,
    color: '#222',
    marginTop: maxHeight * 0.005
  },
  sortOptionsContainer: {
    paddingHorizontal: maxWidth * 0.03,
    flexDirection: 'row',
    width: maxWidth,
  },
  sortOptions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sortIcon: {
    width: maxWidth * 0.029,
    height: maxHeight * 0.017,
    opacity: 0.8,
    margin: maxWidth * 0.01
  },
  sortBy: {
    fontSize: 10,
    letterSpacing: 0.01,
    color: '#111'
  },
  dropDownIcon: {
    width: maxWidth * 0.02,
    height: maxHeight * 0.008,
    opacity: 0.8,
    margin: maxWidth * 0.01
  },
  postsContainer: {
    width: maxWidth, 
    height: maxHeight * 0.6,
    alignItems: "center", 
    justifyContent: 'center'
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
        <View style={styles.subRedditInfoContainer}>
          <View style={styles.subRedditTitleContainer}>
            <Text style={styles.subRedditTitle}>{`r/${searchValue}`}</Text>
            <TouchableOpacity onPress={() => alert('If user is logged in they can join become a member of this SubReddit')} style={styles.joinButton}>
              <Text style={styles.joinPlus}>+</Text>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subRedditStatsContainer}>
            <Text style={styles.subRedditStats}>25,172,716 Photographers • 21,818 online</Text>
            <Text style={styles.subRedditTagLine}>A place for pictures and photographers</Text>
          </View>
          <View style={styles.sortOptionsContainer}>
            <View style={styles.sortOptions}>
              <Image style={styles.sortIcon} source={Images.hot} />
              <Text style={styles.sortBy}>HOT POSTS</Text>
              <Image style={styles.dropDownIcon} source={Images.dropDown} />
            </View>
            <View style={styles.viewOptions}>
              
            </View>
          </View>
        </View>
        <View style={styles.postsContainer}>
          <Text>Posts</Text>
        </View>
      </View>
    </View>
  );
}



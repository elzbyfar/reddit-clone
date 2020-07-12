import React from 'react'
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Styles/HeaderStyles'
import Images from '../Helpers/Images';

const HeaderContainer = (props) => {

  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerPhoto} source={Images.headerBackground} />
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          onChangeText={text => props.setSearchValue(text)}
          onSubmitEditing={() => props.searchInput()}
          value={props.searchValue.toLowerCase()}
        />
        <Image style={styles.searchIcon} source={Images.search} resizeMode="cover" />
      </View>
      {props.webView !== '' && (
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => props.setWebView('')}
      >
        <Image 
          style={styles.backArrow} 
          source={Images.backArrow} 
          resizeMode="cover"
        />
      </TouchableOpacity>
)
        }
      <TouchableOpacity style={styles.logoContainer} onPress={() => alert('Search Button!')}>
        <Image style={styles.logo} source={Images.redditLogo} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderContainer

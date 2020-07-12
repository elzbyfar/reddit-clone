import React from 'react'
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

import backArrow from './assets/back-arrow.png'
import searchIcon from './assets/search-icon.png'
import redditLogo from './assets/reddit-logo.png'
import headerBackground from './assets/reddit-header-background.jpg'

const HeaderContainer = (props) => {

  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerPhoto} source={headerBackground} />
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          onChangeText={text => props.setSearchValue(text)}
          onSubmitEditing={() => props.searchInput()}
          value={props.searchValue.toLowerCase()}
        />
        <Image style={styles.searchIcon} source={searchIcon} resizeMode="cover" />
      </View>
      {props.webView !== '' && (
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => props.setWebView('')}
      >
        <Image 
          style={styles.backArrow} 
          source={backArrow} 
          resizeMode="cover"
        />
      </TouchableOpacity>
)
        }
      <TouchableOpacity style={styles.logoContainer} onPress={() => alert('Search Button!')}>
        <Image style={styles.logo} source={redditLogo} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderContainer

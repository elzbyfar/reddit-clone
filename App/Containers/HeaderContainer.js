import React from 'react'
import { Image, View, TextInput } from 'react-native';
import styles from '../Styles/HeaderStyles'
import Images from '../../assets/Images'

const HeaderContainer = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerPhoto} source={Images.headerBackground} />
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar}
          onChangeText={text => props.setSearchValue(text)}
          value={props.searchValue.toLowerCase()}
        />
        <Image style={styles.searchIcon} source={Images.search} resizeMode="contain" />
      </View>
      <Image style={styles.logo} source={Images.redditLogo} resizeMode="contain" />
    </View>
  )
}

export default HeaderContainer

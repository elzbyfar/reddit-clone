import React, { useState } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../Styles/MainStyles'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'

const MainContainer = () => {

  const [ searchValue, setSearchValue ] = useState("pics")

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderContainer 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <BodyContainer 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </View>
  )

}

export default MainContainer
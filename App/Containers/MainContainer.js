import React, { useState } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview'

import styles from '../Styles/MainStyles'
import HeaderContainer from './HeaderContainer'
import BodyContainer from './BodyContainer'
import useRedditPosts from '../Helpers/useRedditPosts'
import Sizes from '../Helpers/Sizes';

const MainContainer = () => {

  const [ searchValue, setSearchValue ] = useState("pics")
  const [ sortBy, setSortBy ] = useState('Hot')
  const [ webView, setWebView ] = useState('')

  const {redditPosts, subscriberCount} = useRedditPosts(searchValue, sortBy)
 
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <View>
        <HeaderContainer 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          sortBy={sortBy}
          setSortBy={setSortBy}
          webView={webView}
          setWebView={setWebView}
        />
        {webView === '' ? (
          <BodyContainer 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sortBy={sortBy}
            setSortBy={setSortBy}
            redditPosts={redditPosts}
            subscriberCount={subscriberCount}
            webView={webView}
            setWebView={setWebView}
          />
          )
            : (
              <WebView 
                source={{ uri: webView }}
                style={{ height: Sizes.maxHeight, width: Sizes.maxWidth }}
              />
          )}
      </View>
    </View>
  )

}

export default MainContainer
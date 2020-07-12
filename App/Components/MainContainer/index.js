import React, { useState } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview'

import Size from '../../Helpers/Size';
import styles from './styles'
import BodyContainer from '../BodyContainer'
import HeaderContainer from '../HeaderContainer'
import useRedditPosts from '../../Helpers/useRedditPosts'

const MainContainer = () => {

  const [ webView, setWebView ] = useState('')
  const [ sortBy, setSortBy ] = useState('Hot')
  const [ viewMode, setViewMode ] = useState('Classic')
  const [ searchValue, setSearchValue ] = useState("pics")

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
          setViewMode={setViewMode}
          webView={webView}
          setWebView={setWebView}
        />
        {webView === '' ? (
          <BodyContainer 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            redditPosts={redditPosts}
            subscriberCount={subscriberCount}
            webView={webView}
            setWebView={setWebView}
          />
          )
            : (
              <WebView 
                source={{ uri: webView }}
                style={{ height: Size.maxHeight, width: Size.maxWidth }}
              />
          )}
      </View>
    </View>
  )

}

export default MainContainer
import React, { useState } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview'

import Sizes from '../../Helpers/Sizes';
import styles from './styles'
import BodyContainer from '../BodyContainer'
import HeaderContainer from '../HeaderContainer'
import useRedditPosts from '../../Helpers/useRedditPosts'

const MainContainer = () => {

  const [ webView, setWebView ] = useState('')
  const [ sortBy, setSortBy ] = useState('Hot')
  const [ viewMode, setViewMode ] = useState('Classic')
  const [ searchValue, setSearchValue ] = useState("pics")
  const [ upVoted, setUpVoted ] = useState([]);
	const [ downVoted, setDownVoted ] = useState([]);

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
            upVoted={upVoted}
            downVoted={downVoted}
            setUpVoted={setUpVoted}
            setDownVoted={setDownVoted}
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
import React, { useState } from 'react';
import { View } from 'react-native';
import styles from '../Styles/BodyStyles';

import SubRedditInfoContainer from './SubRedditInfoContainer';
import PostsContainer from './PostsContainer'
import SortModal from '../Components/SortModal';
import ViewModal from '../Components/ViewModal';
// import useRedditPosts from '../Helpers/useRedditPosts'

const BodyContainer = (props) => {

  const [ sortModal, setSortModal ] = useState(false)
  const [ viewModal, setViewModal ] = useState(false)

  const [ viewMode, setViewMode ] = useState('Classic')

	return (
  <View style={styles.bodyContainer}>
    <SubRedditInfoContainer 
      sortModal={sortModal} 
      setSortModal={setSortModal} 
      viewModal={viewModal} 
      setViewModal={setViewModal} 
      subscriberCount={props.subscriberCount} 
      searchValue={props.searchValue} 
    />
    <PostsContainer 
      redditPosts={props.redditPosts} 
      webView={props.webView}
      setWebView={props.setWebView}
      viewMode={viewMode}
    />

    {sortModal && (
      <SortModal 
        sortBy={props.sortBy} 
        setSortBy={props.setSortBy} 
        sortModal={sortModal} 
        setSortModal={setSortModal} 
      />
    )}

    {viewModal && (
      <ViewModal 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
        viewModal={viewModal} 
        setViewModal={setViewModal} 
      />
    )}
  </View>
	);
};

export default BodyContainer;

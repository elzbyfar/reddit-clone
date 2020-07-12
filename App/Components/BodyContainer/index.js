import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

import SubRedditInfoContainer from '../SubRedditInfoContainer';
import PostsContainer from '../PostsContainer'
import SortByModal from '../SubRedditInfoContainer/SortByModal';
import ViewModal from '../SubRedditInfoContainer/ViewModal';

const BodyContainer = (props) => {

  const [ sortModal, setSortModal ] = useState(false)
  const [ viewModal, setViewModal ] = useState(false)

	return (
  <View style={styles.bodyContainer}>
    <SubRedditInfoContainer 
      sortModal={sortModal} 
      setSortModal={setSortModal} 
      viewModal={viewModal} 
      setViewModal={setViewModal} 
      viewMode={props.viewMode}
      subscriberCount={props.subscriberCount} 
      searchValue={props.searchValue} 
    />
    <PostsContainer 
      redditPosts={props.redditPosts} 
      webView={props.webView}
      setWebView={props.setWebView}
      viewMode={props.viewMode}
      upVoted={props.upVoted}
      downVoted={props.downVoted}
      setUpVoted={props.setUpVoted}
      setDownVoted={props.setDownVoted}
    />

    {sortModal && (
      <SortByModal 
        sortBy={props.sortBy} 
        setSortBy={props.setSortBy} 
        sortModal={sortModal} 
        setSortModal={setSortModal} 
      />
    )}

    {viewModal && (
      <ViewModal 
        viewMode={props.viewMode} 
        setViewMode={props.setViewMode} 
        viewModal={viewModal} 
        setViewModal={setViewModal} 
      />
    )}
  </View>
	);
};

export default BodyContainer;

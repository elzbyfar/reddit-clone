import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from '../Styles/BodyStyles';

import JSONAPIAdapter from '../Helpers/JSONAPIAdapter';
import SubRedditInfoContainer from './SubRedditInfoContainer';
import PostsContainer from './PostsContainer'
import SortModal from '../Components/SortModal';
import ViewModal from '../Components/ViewModal';

const adapter = new JSONAPIAdapter('https://api.reddit.com/r/pics/hot.json')

const BodyContainer = (props) => {

  const [ redditPosts, setRedditPosts ] = useState([])
  const [ sortModal, setSortModal ] = useState(false)
  const [ viewModal, setViewModal ] = useState(false)

  const [ sortBy, setSortBy ] = useState('Hot')
  const [ viewMode, setViewMode ] = useState('Classic')

  useEffect(() => {
    adapter.redditPosts().then(resp => {
      setRedditPosts(resp.data.children)
    })
  }, [])

  const digitsArray = []
  const topEntry = redditPosts.find(post => post.data.subreddit_subscribers)
  let subscriberCount = topEntry && topEntry.data.subreddit_subscribers.toString().split('').reverse().forEach((n, i) => {
    digitsArray.push(n)
    if ((i + 1) % 3 === 0) {
      digitsArray.push(',')
    }
  })

  subscriberCount = digitsArray.reverse().join('')
	return (
  <View style={styles.bodyContainer}>
    <SubRedditInfoContainer viewModal={viewModal} setViewModal={setViewModal} subscriberCount={subscriberCount} searchValue={props.searchValue} />
    <PostsContainer redditPosts={redditPosts} />
    {sortModal && <SortModal />}
    {viewModal && <ViewModal />}
  </View>
	);
};

export default BodyContainer;

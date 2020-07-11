import React, { useState, useCallback } from 'react';
import { ImageBackground, RefreshControl, Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import styles from '../Styles/PostsStyles';
import Images from '../../assets/Images';
import timeConverter from '../Helpers/timeConverter'

const PostsContainer = (props) => {

  const [ upVoted, setUpVoted ] = useState([])
  const [ downVoted, setDownVoted ] = useState([])

  const [ refreshing, setRefreshing ] = useState(false);

  const wait = (timeout) => {

    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    const redditPosts = props.redditPosts

    wait(2000).then(() => setRefreshing(false)).then(() => {
      return redditPosts
    })
  }, [])

  return (
    <View style={props.viewMode === 'Media Gallery' ? styles.galleryContainer : styles.postsContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {props.redditPosts.map((post, index) => {
        return (
          props.viewMode === 'Media Gallery' ? (
            post.data.url_overridden_by_dest && (
            <TouchableOpacity 
              style={styles.galleryImageBox} 
              activeOpacity={1}
              key={post.data.id}
              onPress={() => props.setWebView(`http://reddit.com${post.data.permalink}?&utm_name=iossmf`)}
            >
              <Image
                style={styles.galleryImage}
                source={{ uri: post.data.url_overridden_by_dest }}
                resizeMode="cover"
              />
            </TouchableOpacity>
)
          )
            : (
              <View style={styles.listPost} key={post.data.id}>
                <View style={styles.userAndTimeContainer}>
                  <Text style={styles.userNameAndTime}>{`u/${post.data.author} • ${timeConverter(post.data.created_utc)}`}</Text>
                </View>
                <TouchableOpacity 
                  activeOpacity={1}
                  style={(props.viewMode === 'Card' && styles.postTitleContainerForCard) || (props.viewMode === 'Classic' && styles.postTitleContainerForClassic)}
                  onPress={() => props.setWebView(`http://reddit.com${post.data.permalink}?&utm_name=iossmf`)}
                >
                  <Text style={(props.viewMode === 'Card' && styles.postTitleForCard) || (props.viewMode === 'Classic' && styles.postTitleForClassic)}>{post.data.title}</Text>
                  <View>
                    {props.viewMode === 'Card' && !post.data.url_overridden_by_dest ? 
                      <Text>{post.data.selfText}</Text>
                  : (
                    <ImageBackground 
                      style={(props.viewMode === 'Card' && styles.cardImage) || (props.viewMode === 'Classic' && styles.listImage)} 
                      source={(props.viewMode === 'Card' && { uri: post.data.url_overridden_by_dest}) || props.viewMode === 'Classic' && { uri: post.data.thumbnail }}
                      resizeMode="cover"
                    />
                )}
                  </View>
                </TouchableOpacity>
                <View style={styles.listPostBottomControls}>
                  <View style={styles.votesContainer}>
                    <TouchableOpacity onPress={() => {
                  setUpVoted([...upVoted, index])
                  downVoted.includes(index) && downVoted.splice(downVoted.indexOf(index), 1)
              }}
                    >
                      <Image style={upVoted.includes(index) ? [styles.arrow, styles.arrowUpVote] : styles.arrow} source={Images.arrowUp} resizeMode="cover" />
                    </TouchableOpacity>
                    <Text style={upVoted.includes(index) && [styles.upsCount, styles.upsCountSelected] || downVoted.includes(index) && [styles.upsCount, styles.downCountSelected] || !upVoted.includes(index) && !downVoted.includes(index) && styles.upsCount}>{post.data.ups > 1000 ? `${(post.data.ups / 1000).toFixed(1)}k` : post.data.ups}</Text>
                    <TouchableOpacity onPress={() => {
                  setDownVoted([...downVoted, index])
                  upVoted.includes(index) && upVoted.splice(upVoted.indexOf(index), 1)
              }}
                    >
                      <Image style={downVoted.includes(index) ? [styles.arrow, styles.arrowDownVote] : styles.arrow} source={Images.arrowDown} resizeMode="cover" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={() => alert('COMMENTS')} style={styles.commentsContainer}>
                    <Image style={styles.commentIcon} source={Images.comment} resizeMode="cover" />
                    <Text style={styles.commentCount}>{post.data.num_comments > 1000 ? `${(post.data.num_comments / 1000).toFixed(1)}k` : post.data.num_comments}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('SHARE')} style={styles.shareContainer}>
                    <Image style={styles.shareIcon} source={Images.share} resizeMode="cover" />
                    <Text style={styles.shareText}>Share</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('AWARDS')}>
                    <Image style={styles.awardIcon} source={Images.award} resizeMode="cover" />
                  </TouchableOpacity>
                </View>
              </View>
          )
)
      })}
      </ScrollView>
    </View>
  )
}

export default PostsContainer
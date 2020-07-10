import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import JSONAPIAdapter from '../Helpers/JSONAPIAdapter'
import styles from '../Styles/PostsStyles';
import Images from '../../assets/Images';

const adapter = new JSONAPIAdapter('https://api.reddit.com/r/politics/hot.json')

const PostsContainer = () => {

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    adapter.redditPosts().then(resp => {
      setPosts(resp.data.children)
    })
  }, [])

  return (
    <View style={styles.postsContainer}>
      <ScrollView>
        {posts.map(post => {
        return (
          <View style={styles.listPost} key={post.data.id}>
            <View style={styles.userAndTimeContainer}>
              <Text style={styles.userNameAndTime}>{`u/${post.data.author} • 115d`}</Text>
              <Image style={styles.listImage} source={post.data.thumbnail} resizeMode="contain" />
            </View>
          </View>
)
      })}
      </ScrollView>
    </View>
  )
}

export default PostsContainer
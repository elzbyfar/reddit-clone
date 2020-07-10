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
              <Image style={styles.listImage} source={Images.hot} resizeMode="contain" />
            </View>
            <View></View>
            <View style={styles.listPostBottomControlls}>
              <View style={styles.votesContainer}>
                <Image style={styles.arrow} source={Images.arrowUp} resizeMode="contain" />
                <Text style={styles.upsCount}>{post.data.ups > 1000 ? `${(post.data.ups / 1000).toFixed(1)}k` : post.data.ups}</Text>
                <Image style={styles.arrow} source={Images.arrowDown} resizeMode="contain" />
              </View>
            </View>
          </View>
)
      })}
      </ScrollView>
    </View>
  )
}

export default PostsContainer
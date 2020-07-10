import React, { useState } from 'react';
import { ImageBackground, Image, ScrollView, View, TouchableOpacity, Text } from 'react-native';

import styles from '../Styles/PostsStyles';
import Images from '../../assets/Images';

const PostsContainer = (props) => {

  const [ upVoted, setUpVoted ] = useState([])
  const [ downVoted, setDownVoted ] = useState([])

  const timeConverter = (utc) => {

    const dateObj = {
      year: null, 
      month: null, 
      day: null
    }
    const timeObj = {
      hour: null, 
      minute: null, 
      second: null
    }

    const utcSplit = new Date(utc * 1000).toISOString().split("T")
    const currentSplit = new Date(Date.now()).toISOString().split("T")
    
    const utcDate = utcSplit[0].split("-")
    const utcTime = utcSplit[1].split(":")

    const currentDate = currentSplit[0].split("-")
    const currentTime = currentSplit[1].split(":")

    for (let i = 0; i < 3; i+=1) {
      if (Math.abs(currentDate[i] - utcDate[i]) !== 0) {
        dateObj[i === 0 && 'year' || i === 1 && 'month' || i === 2 && 'day'] = currentDate[i] - utcDate[i]
      }
      if (Math.abs(currentTime[i] - utcTime[i]) !== 0) {
        timeObj[i === 0 && 'hour' || i === 1 && 'minute' || i === 2 && 'second'] = currentTime[i] - utcTime[i]
      }
    }

    if (dateObj.year || dateObj.month || dateObj.day) {
      return `${(dateObj.year * 365) +(dateObj.month * 30) + dateObj.day}d`
    } 
    if (timeObj.hour) {
      return `${timeObj.hour}h`
    } 
    if (timeObj.minute) {
      return `${timeObj.minute}m`
    } 
    if (timeObj.second) {
      return `${timeObj.second}s`
    } 

    return null
  }
  
  return (
    <View style={styles.postsContainer}>
      <ScrollView>
        {props.redditPosts.map((post, index) => {
        return (
          <View style={styles.listPost} key={post.data.id}>
            <View style={styles.userAndTimeContainer}>
              <Text style={styles.userNameAndTime}>{`u/${post.data.author} • ${timeConverter(post.data.created_utc)}`}</Text>
            </View>
            <View style={styles.postTitleContainer}>
              <Text style={styles.postTitle}>{post.data.title}</Text>
              <ImageBackground style={styles.listImage} source={{ uri: post.data.thumbnail}} resizeMode="cover" />
            </View>
            <View style={styles.listPostBottomControls}>
              <View style={styles.votesContainer}>
                <TouchableOpacity onPress={() => {
                  setUpVoted([...upVoted, index])
                  downVoted.includes(index) && downVoted.splice(downVoted.indexOf(index), 1)
              }}>
                  <Image style={upVoted.includes(index) ? [styles.arrow, styles.arrowUpVote] : styles.arrow} source={Images.arrowUp} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={upVoted.includes(index) && [styles.upsCount, styles.upsCountSelected] || downVoted.includes(index) && [styles.upsCount, styles.downCountSelected] || !upVoted.includes(index) && !downVoted.includes(index) && styles.upsCount}>{post.data.ups > 1000 ? `${(post.data.ups / 1000).toFixed(1)}k` : post.data.ups}</Text>
                <TouchableOpacity onPress={() => {
                  setDownVoted([...downVoted, index])
                  upVoted.includes(index) && upVoted.splice(upVoted.indexOf(index), 1)
              }}>
                  <Image style={downVoted.includes(index) ? [styles.arrow, styles.arrowDownVote] : styles.arrow} source={Images.arrowDown} resizeMode="contain" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => alert('If user is logged in they can leave a comment on this post.')} style={styles.commentsContainer}>
                <Image style={styles.commentIcon} source={Images.comment} />
                <Text style={styles.commentCount}>{post.data.num_comments > 1000 ? `${(post.data.num_comments / 1000).toFixed(1)}k` : post.data.num_comments}</Text>
              </TouchableOpacity>
              <View style={styles.shareContainer}>
                <Image style={styles.shareIcon} source={Images.share} />
                <Text style={styles.shareText}>Share</Text>
              </View>
              <View>
                <Image style={styles.awardIcon} source={Images.award} />
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
import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import arrowDown from './assets/arrow-down-icon.png'
import arrowUp from './assets/arrow-up-icon.png'
import award from './assets/award-icon.png'
import comment from './assets/comment-icon.png'
import share from './assets/share-icon.png'

const PostControls = (props) => {
  return (
    <View style={styles.postControls}>
      <View style={styles.votesContainer}>
        <TouchableOpacity
          onPress={() => {
            props.setUpVoted([ ...props.upVoted, props.index ]);
            props.downVoted.includes(props.index) && props.downVoted.splice(props.downVoted.indexOf(props.index), 1);
          }}
        >
          <Image
            style={props.upVoted.includes(props.index) ? [ styles.arrow, styles.arrowUpVote ] : styles.arrow}
            source={arrowUp}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={
            (props.upVoted.includes(props.index) && [ styles.upsCount, styles.upsCountSelected ]) ||
            (props.downVoted.includes(props.index) && [ styles.upsCount, styles.downCountSelected ]) ||
            (!props.upVoted.includes(props.index) && !props.downVoted.includes(props.index) && styles.upsCount)
          }
        >
          {props.post.upVotes > 1000 ? `${(props.post.upVotes / 1000).toFixed(1)}k` : props.post.upVotes}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.setDownVoted([ ...props.downVoted, props.index ]);
            props.upVoted.includes(props.index) && props.upVoted.splice(props.upVoted.indexOf(props.index), 1);
          }}
        >
          <Image
            style={props.downVoted.includes(props.index) ? [ styles.arrow, styles.arrowDownVote ] : styles.arrow}
            source={arrowDown}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => alert('Comments')} style={styles.commentsContainer}>
        <Image style={styles.commentIcon} source={comment} resizeMode="cover" />
        <Text style={styles.commentCount}>
          {props.post.commentCount > 1000 ? (
            `${(props.post.commentCount / 1000).toFixed(1)}k`
          ) : (
            props.post.commentCount
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Share')} style={styles.shareContainer}>
        <Image style={styles.shareIcon} source={share} resizeMode="cover" />
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Awards')}>
        <Image style={styles.awardIcon} source={award} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

export default PostControls
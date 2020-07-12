import React from 'react';
import Images from '../Helpers/Images';
import styles from '../Styles/PostsStyles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

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
            source={Images.arrowUp}
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
          {props.post.data.ups > 1000 ? `${(props.post.data.ups / 1000).toFixed(1)}k` : props.post.data.ups}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.setDownVoted([ ...props.downVoted, props.index ]);
            props.upVoted.includes(props.index) && props.upVoted.splice(props.upVoted.indexOf(props.index), 1);
          }}
        >
          <Image
            style={props.downVoted.includes(props.index) ? [ styles.arrow, styles.arrowDownVote ] : styles.arrow}
            source={Images.arrowDown}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => alert('COMMENTS')} style={styles.commentsContainer}>
        <Image style={styles.commentIcon} source={Images.comment} resizeMode="cover" />
        <Text style={styles.commentCount}>
          {props.post.data.num_comments > 1000 ? (
            `${(props.post.data.num_comments / 1000).toFixed(1)}k`
          ) : (
            props.post.data.num_comments
          )}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('SHARE')} style={styles.shareContainer}>
        <Image style={styles.shareIcon} source={Images.share} resizeMode="cover" />
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('AWARDS')}>
        <Image style={styles.awardIcon} source={Images.award} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

export default PostControls
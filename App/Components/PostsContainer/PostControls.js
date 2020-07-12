import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import formatVotesAndComments from '../../Helpers/formatVotesAndComments'
import styles from './styles';

import arrowDown from './assets/arrow-down-icon.png';
import arrowUp from './assets/arrow-up-icon.png';
import award from './assets/award-icon.png';
import comment from './assets/comment-icon.png';
import share from './assets/share-icon.png';

const PostControls = (props) => {
	const [ upVote, setUpVote ] = useState(false);
	const [ downVote, setDownVote ] = useState(false);

	const styleCount = () => {
		if (upVote) { return [ styles.upsCount, styles.upsCountSelected ] }
		if (downVote) { return [ styles.upsCount, styles.downCountSelected ] }
		return styles.upsCount;
	};

	const styleArrow = (direction) => {
		if (upVote && direction === 'up') { return [ styles.arrow, styles.arrowUpVote ] }
		if (downVote && direction === 'down') { return [ styles.arrow, styles.arrowDownVote ] }
		return styles.arrow;
  };

	return (
		<View style={styles.postControls}>
			<View style={styles.votesContainer}>
				<TouchableOpacity onPress={() => {setUpVote(!upVote), setDownVote(false)}}>
					<Image style={styleArrow('up')} source={arrowUp} resizeMode="cover" />
				</TouchableOpacity>
				<Text style={styleCount()}>{formatVotesAndComments(props.post.upVotes)}</Text>
				<TouchableOpacity onPress={() => {setDownVote(!downVote), setUpVote(false)}}>
					<Image style={styleArrow('down')} source={arrowDown} resizeMode="cover" />
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={() => alert('Comments')} style={styles.commentsContainer}>
				<Image style={styles.commentIcon} source={comment} resizeMode="cover" />
				<Text style={styles.commentCount}>{formatVotesAndComments(props.post.commentCount)}	</Text>
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

export default PostControls;

import React from 'react';
import styles from '../Styles/PostsStyles';
import PostBody from '../Components/PostBody'
import PostControls from '../Components/PostControls';
import timeConverter from '../Helpers/timeConverter';
import { View, Text } from 'react-native';

const RenderCardOrClassicMedia = (props) => {

	return (
		<View style={styles.listPost}>
			<View style={styles.userAndTimeContainer}>
				<Text style={styles.userNameAndTime}>{`u/${props.post.data.author} • ${timeConverter(
					props.post.data.created_utc
				)}`}</Text>
			</View>
			<PostBody 
				post={props.post}
				viewMode={props.viewMode} 
				setWebView={props.setWebView}
			/>
			<PostControls 
				post={props.post}
				index={props.index}
				upVoted={props.upVoted}
				downVoted={props.downVoted}
				setUpVoted={props.setUpVoted}
				setDownVoted={props.setDownVoted}
			/>
		</View>
	);
};

export default RenderCardOrClassicMedia;

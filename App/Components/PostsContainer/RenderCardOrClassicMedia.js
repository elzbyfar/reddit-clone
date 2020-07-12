import React from 'react';
import styles from './styles';
import PostBody from './PostBody';
import PostControls from './PostControls';
import timeConverter from '../../Helpers/timeConverter';
import { View, Text } from 'react-native';

const RenderCardOrClassicMedia = (props) => {
	return (
		<View style={styles.listPost}>
			<View style={styles.userAndTimeContainer}>
				<Text style={styles.userNameAndTime}>{`u/${props.post.author} • ${timeConverter(props.post.createdAt)}`}</Text>
			</View>
			<PostBody post={props.post} viewMode={props.viewMode} setWebView={props.setWebView} />
			<PostControls
				post={props.post}
				index={props.index}
			/>
		</View>
	);
};

export default RenderCardOrClassicMedia;

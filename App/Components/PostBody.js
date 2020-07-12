import React from 'react';
import styles from '../Styles/PostsStyles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PostBody = (props) => {
	const cardOrClassicView = () => {
		if (props.viewMode === 'Card') {
			return (
				<View style={styles.postTitleContainerForCard}>
					<Text style={styles.postTitleForCard}>{props.post.data.title}</Text>
					<View>
						{!props.post.data.url_overridden_by_dest ? (
							<Text>{props.post.data.selfText}</Text>
						) : (
							<Image
								style={styles.cardImage}
								source={{ uri: props.post.data.url_overridden_by_dest }}
								resizeMode="cover"
							/>
						)}
					</View>
				</View>
			);
		} else if (props.viewMode === 'Classic') {
			return (
				<View style={styles.postTitleContainerForClassic}>
					<Text style={styles.postTitleForClassic}>{props.post.data.title}</Text>
					<View>
						<Image
							style={styles.listImage}
							source={{ uri: props.post.data.thumbnail }}
							resizeMode="cover"
						/>
					</View>
				</View>
			);
		}
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => props.setWebView(`http://reddit.com${props.post.data.permalink}?&utm_name=iossmf`)}
		>
			{cardOrClassicView()}
		</TouchableOpacity>
	);
};

export default PostBody;

import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PostBody = (props) => {
	const cardOrClassicView = () => {
		if (props.viewMode === 'Card') {
			return (
				<View style={styles.postTitleContainerForCard}>
					<Text style={styles.postTitleForCard}>{props.post.title}</Text>
					<View>
						{!props.post.largeImage ? (
							<Text>{props.post.description}</Text>
						) : (
							<Image
								style={styles.cardImage}
								source={props.post.largeImage && { uri: props.post.largeImage }}
								resizeMode="cover"
							/>
						)}
					</View>
				</View>
			);
		} else if (props.viewMode === 'Classic') {
			return (
				<View style={styles.postTitleContainerForClassic}>
					<Text style={styles.postTitleForClassic}>{props.post.title}</Text>
					<View>
						<Image
							style={styles.listImage}
							source={props.post.thumbnail && { uri: props.post.thumbnail }}
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
			onPress={() => props.setWebView(props.post.url)}
		>
			{cardOrClassicView()}
		</TouchableOpacity>
	);
};

export default PostBody;

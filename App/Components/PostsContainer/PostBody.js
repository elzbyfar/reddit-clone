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
						{props.post.largeImage ? (
							<Image
								style={styles.cardImage}
								source={props.post.largeImage && { uri: props.post.largeImage }}
								resizeMode="cover"
							/>
						) : (
							<Text>{props.post.description}</Text>
						)}
					</View>
				</View>
			);
		} else if (props.viewMode === 'Classic') {
			return props.post.thumbnail ? (
				<View style={styles.postTitleContainerForClassic}>
					{<Text style={styles.postTitleForClassic}>{props.post.title}</Text>}
					<View>
						<Image style={styles.listImage} source={{ uri: props.post.thumbnail }} resizeMode="cover" />
					</View>
				</View>
			) : (
				<View style={styles.postTitleContainerForClassic}>
					<Text style={styles.postTitleForClassic}>{props.post.title}</Text>
				</View>
			);
		}
	};

	return (
		<TouchableOpacity activeOpacity={1} onPress={() => props.setWebView(props.post.url)}>
			{cardOrClassicView()}
		</TouchableOpacity>
	);
};

export default PostBody;

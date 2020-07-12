import React, { useState, useCallback } from 'react';
import { View, RefreshControl, ScrollView } from 'react-native';

import styles from './styles';

import RenderGalleryMedia from './RenderGalleryMedia';
import RenderCardOrClassicMedia from './RenderCardOrClassicMedia';

const PostsContainer = (props) => {
	
	const [ refreshing, setRefreshing ] = useState(false);

	const wait = (timeout) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	const onRefresh = useCallback(() => {
		setRefreshing(true);

		const redditPosts = props.redditPosts;

		wait(2000).then(() => setRefreshing(false)).then(() => {
			return redditPosts;
		});
	}, []);

	return (
		<View style={props.viewMode === 'Media Gallery' ? styles.galleryContainer : styles.postsContainer}>
			<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				{props.redditPosts.map((post, index) => {
					return props.viewMode === 'Media Gallery'
						? <RenderGalleryMedia 
								key={post.id}
								post={post}
								setWebView={props.setWebView}
							/>
						: <RenderCardOrClassicMedia 
								key={post.id}
								post={post}
								index={index}
								upVoted={props.upVoted}
								downVoted={props.downVoted}
								setUpVoted={props.setUpVoted}
								setDownVoted={props.setDownVoted}
								viewMode={props.viewMode}
								setWebView={props.setWebView}
							/>;
				})}
			</ScrollView>
		</View>
	);
};

export default PostsContainer;

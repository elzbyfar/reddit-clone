import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/BodyStyles';

import SubRedditInfoContainer from './SubRedditInfoContainer';
import PostsContainer from './PostsContainer'

const BodyContainer = () => {
	return (
  <View style={styles.bodyContainer}>
    <SubRedditInfoContainer />
    <PostsContainer />
  </View>
	);
};

export default BodyContainer;

import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import styles from '../Styles/SubRedditInfoStyles';
import Images from '../Helpers/Images';

const SubRedditInfoContainer = (props) => {

  return (
    <View style={styles.subRedditInfoContainer}>
      <View style={styles.subRedditTitleContainer}>
        <Text style={styles.subRedditTitle}>{`r/${props.searchValue}`}</Text>
        <TouchableOpacity
          onPress={() => alert('Join SubReddit Community Button')}
          style={styles.joinButton}
        >
          <Text style={styles.joinPlus}>+</Text>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subRedditStatsContainer}>
        <Text style={styles.subRedditStats}>{`${props.subscriberCount} Subscribers in the r/${props.searchValue} community.`}</Text>
        <Text style={styles.subRedditTagLine}>Welcome To Reddit - The front page of the internet.</Text>
      </View>
      <View style={styles.sortOptionsContainer}>
        <TouchableOpacity onPress={() => props.setSortModal(!props.sortModal)} style={styles.sortOptions}>
          <Image style={styles.sortIcon} source={Images.hot} resizeMode="cover" />
          <Text style={styles.sortBy}>HOT POSTS</Text>
          <Image style={styles.dropDownIcon} source={Images.dropDown} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setViewModal(!props.viewModal)} style={styles.viewOptions}>
          <Image style={styles.viewOptionImage} source={(props.viewMode === 'Card' && Images.cardView) || (props.viewMode === 'Classic' && Images.classicView) || (props.viewMode === 'Media Gallery' && Images.galleryView)} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubRedditInfoContainer
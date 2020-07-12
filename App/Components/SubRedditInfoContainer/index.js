import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import Hot from './assets/hot-icon.png'
import cardView from './assets/card-view-icon.png'
import dropDown from './assets/drop-down-icon.png'
import galleryView from './assets/gallery-view-icon.png'
import classicView from './assets/classic-view-icon.png'

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
          <Image style={styles.sortIcon} source={Hot} resizeMode="cover" />
          <Text style={styles.sortBy}>HOT POSTS</Text>
          <Image style={styles.dropDownIcon} source={dropDown} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setViewModal(!props.viewModal)} style={styles.viewOptions}>
          <Image style={styles.viewOptionImage} source={(props.viewMode === 'Card' && cardView) || (props.viewMode === 'Classic' && classicView) || (props.viewMode === 'Media Gallery' && galleryView)} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubRedditInfoContainer
import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import Hot from './assets/hot-icon.png'
import New from './assets/new-icon.png'
import Top from './assets/top-icon.png'
import Rising from './assets/rising-icon.png'
import Controversial from './assets/controversial-icon.png'
import dropDown from './assets/drop-down-icon.png'
import cardView from './assets/card-view-icon.png'
import classicView from './assets/classic-view-icon.png'
import galleryView from './assets/gallery-view-icon.png'

const SubRedditInfoContainer = (props) => {

  const sortByIcon = (sortByValue) => {
    if (sortByValue === 'Hot') { return Hot }
    if (sortByValue === 'New') { return New }
    if (sortByValue === 'Top') { return Top }
    if (sortByValue === 'Rising') { return Rising }
    if (sortByValue === 'Controversial') { return Controversial }
  }

  const viewModeIcon = (viewModeValue) => {
    if (viewModeValue === 'Card') { return cardView}
    if (viewModeValue === 'Classic') { return classicView}
    if (viewModeValue === 'Media Gallery') { return galleryView}
  }

  return (
    <View style={styles.subRedditInfoContainer}>
      <View style={styles.subRedditTitleContainer}>
        <Text style={styles.subRedditTitle}>{`r/${props.searchValue}`}</Text>
        <TouchableOpacity
          onPress={() => alert('Join Community Button')}
          style={styles.joinButton}
        >
          <Text style={styles.joinPlus}>+</Text>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subRedditStatsContainer}>
        <Text style={styles.subRedditHeadLine}>Welcome To Reddit</Text>
        <Text style={styles.subRedditTagLine}>The front page of the internet.</Text>
        <Text style={styles.subRedditStats}>{`${props.subscriberCount} Subscribers in the r/${props.searchValue} community.`}</Text>
      </View>
      <View style={styles.sortOptionsContainer}>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => props.setSortModal(!props.sortModal)} 
          style={styles.sortOptions}
        >
          <Image style={styles.sortIcon} source={sortByIcon(props.sortBy)} resizeMode="cover" />
          <Text style={styles.sortBy}>{(props.sortBy).toUpperCase()} POSTS</Text>
          <Image style={styles.dropDownIcon} source={dropDown} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => props.setViewModal(!props.viewModal)} 
          style={styles.viewOptions}
        >
          <Image style={styles.viewOptionImage} source={viewModeIcon(props.viewMode)} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubRedditInfoContainer
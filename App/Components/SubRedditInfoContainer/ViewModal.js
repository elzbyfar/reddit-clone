import React from 'react';
import { Modal, Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
// import Images from '../../Helpers/Images';

import galleryView from './assets/gallery-view-icon.png'
import classicView from './assets/classic-view-icon.png'
import cardView from './assets/card-view-icon.png'

const ViewModal = (props) => {

  return (
    <Modal 
      animationType="slide"
      transparent
      onRequestClose={() => props.setViewModal(false)}
    >
      <TouchableOpacity 
        activeOpacity={1} 
        onPress={() => props.setViewModal(false)} 
        style={styles.viewModalContainer}
      >
        <View style={styles.viewModal}>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
            props.setViewMode('Card')
            props.setViewModal(false)
          }}
            style={props.viewMode === 'Card' ? [styles.viewOption, styles.viewOptionSelected] : styles.viewOption}
          >
            <Image style={styles.viewOptionImage} source={cardView} resizeMode="cover" />
            <Text style={styles.viewOptionText}>Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
            props.setViewMode('Classic')
            props.setViewModal(false)
            }}
            style={props.viewMode === 'Classic' ? [styles.viewOption, styles.viewOptionSelected] : styles.viewOption}
          >
            <Image style={styles.viewOptionImage} source={classicView} resizeMode="cover" />
            <Text style={styles.viewOptionText}>Classic</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
            props.setViewMode('Media Gallery')
            props.setViewModal(false)
            }}
            style={props.viewMode === 'Media Gallery' ? [styles.viewOption, styles.viewOptionSelected] : styles.viewOption}
          >
            <Image style={styles.viewOptionImage} source={galleryView} resizeMode="cover" />
            <Text style={styles.viewOptionText}>Media Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => props.setViewModal(false)} 
            style={styles.viewModalCloseButton}
          >
            <Text style={styles.viewModalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

    </Modal>
  )
}

export default ViewModal
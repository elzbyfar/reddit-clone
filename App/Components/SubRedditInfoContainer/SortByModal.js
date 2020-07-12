import React from 'react';
import { Modal, Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import Hot from './assets/hot-icon.png'
import New from './assets/new-icon.png'
import Top from './assets/top-icon.png'
import Rising from './assets/rising-icon.png'
import Controversial from './assets/controversial-icon.png'

const SortByModal = (props) => {

  return (
    <Modal 
      animationType="slide"
      transparent
      onRequestClose={() => props.setSortModal(false)}
    >
      <TouchableOpacity 
        activeOpacity={1} 
        onPress={() => props.setSortModal(false)} 
        style={styles.sortByModalContainer}
      >
        <View style={styles.sortByModal}>
          <View style={styles.sortByHeaderView}>
            <Text style={styles.sortByHeaderText}>SORT POSTS BY</Text>
          </View>
          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => {
              props.setSortBy('Hot')
              props.setSortModal(false)
            }}
            style={props.sortBy === 'Hot' ? [styles.sortByOption, styles.sortByOptionSelected] : styles.sortByOption}
          >
            <Image style={styles.sortByImage} source={Hot} resizeMode="contain" />
            <Text style={styles.sortByText}>Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
              props.setSortBy('New')
              props.setSortModal(false)
            }}
            style={props.sortBy === 'New' ? [styles.sortByOption, styles.sortByOptionSelected] : styles.sortByOption}
          >
            <Image style={styles.sortByImage} source={New} resizeMode="contain" />
            <Text style={styles.sortByText}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
              props.setSortBy('Top')
              props.setSortModal(false)
            }}
            style={props.sortBy === 'Top' ? [styles.sortByOption, styles.sortByOptionSelected] : styles.sortByOption}
          >
            <Image style={styles.sortByImage} source={Top} resizeMode="contain" />
            <Text style={styles.sortByText}>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
              props.setSortBy('Controversial')
              props.setSortModal(false)
            }}
            style={props.sortBy === 'Controversial' ? [styles.sortByOption, styles.sortByOptionSelected] : styles.sortByOption}
          >
            <Image style={styles.sortByImage} source={Controversial} resizeMode="contain" />
            <Text style={styles.sortByText}>Controversial</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {
              props.setSortBy('Rising')
              props.setSortModal(false)
            }}
            style={props.sortBy === 'Rising' ? [styles.sortByOption, styles.sortByOptionSelected] : styles.sortByOption}
          >
            <Image style={styles.sortByImage} source={Rising} resizeMode="contain" />
            <Text style={styles.sortByText}>Rising</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            activeOpacity={1} 
            onPress={() => props.setSortModal(false)} 
            style={styles.sortByModalCloseButton}
          >
            <Text style={styles.sortByModalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

    </Modal>
  )
}

export default SortByModal

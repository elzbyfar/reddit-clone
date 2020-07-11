import React from 'react';
import { Modal, Image, View, Text, TouchableOpacity } from 'react-native';

import styles from '../Styles/SortModalStyles';
import Images from '../../assets/Images';

const SortModal = (props) => {

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
            <Image style={styles.sortByImage} source={Images.hot} resizeMode="cover" />
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
            <Image style={styles.sortByImage} source={Images.new} resizeMode="cover" />
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
            <Image style={styles.sortByImage} source={Images.top} resizeMode="cover" />
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
            <Image style={styles.sortByImage} source={Images.controversial} resizeMode="cover" />
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
            <Image style={styles.sortByImage} source={Images.rising} resizeMode="cover" />
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

export default SortModal

import React from 'react';
import { WebView, Modal, Share, View, Text, TouchableOpacity } from 'react-native';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base'

import styles from '../Styles/ViewModalStyles';

const ViewModal = (props) => {

  const [ isLoading, setIsLoading ] = useState(true)
  // const []

  return (
    <Modal 
      style={styles.viewModalContainer}
      animationType="slide"
      transparent
      // visible={}
    >
      <View>
        <Text>Card</Text>
      </View>
      <View>
        <Text>Classic</Text>
      </View>
      <View>
        <Text>Media Gallery</Text>
      </View>
      <View>
        <Text>Close</Text>
      </View>
    </Modal>
  )
}

export default ViewModal
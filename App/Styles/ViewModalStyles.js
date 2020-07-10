import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  viewModalContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    width: Sizes.maxWidth * 0.9, 
    height: Sizes.maxHeight * 0.3
  }

})

export default styles
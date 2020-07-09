import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  postsContainer: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.6,
    backgroundColor: '#ddd',
    alignItems: "center", 
    justifyContent: 'center'
  }
})

export default styles
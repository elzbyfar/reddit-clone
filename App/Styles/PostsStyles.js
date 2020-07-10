import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  postsContainer: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.6,
    backgroundColor: '#ddd',
    alignItems: "center", 
    justifyContent: 'center'
  }, 
  listPost: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.17,
    backgroundColor: "#fff",
    paddingHorizontal: Sizes.maxWidth * 0.02, 
    paddingVertical: Sizes.maxHeight * 0.01, 
    borderBottomColor: "#eee", 
    borderBottomWidth: 1.5
  }, 
  userAndTimeContainer: {
    flexDirection: 'row'
  }, 
  userNameAndTime: {
    color: "#777",
    fontSize: 12,
  }, 
  listImages: {
    width: Sizes.maxWidth * 0.2, 
    height: Sizes.maxHeight * 0.1
  }
})

export default styles
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
    borderBottomWidth: 1.5, 
    justifyContent: 'space-between'
  }, 
  userAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Sizes.maxWidth
  }, 
  userNameAndTime: {
    color: "#777",
    fontSize: 12,
  }, 
  listImage: {
    borderWidth: 1,
    borderColor: '#555',
    width: Sizes.maxWidth * 0.2, 
    height: Sizes.maxHeight * 0.1,
    marginRight: Sizes.maxWidth * 0.05
  },
  votesContainer: {
    flexDirection: 'row',
    alignContent: 'center', 
  },
  upsCount: {
    fontSize: 11, 
    fontWeight: '200', 
    marginRight: 3,
    marginLeft: 5,
  },
  arrow: {
    width: Sizes.maxWidth * 0.04,
    height: Sizes.maxHeight * 0.015, 
    opacity: 0.6
  }
})

export default styles
import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  sortByModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#00000095', 
    width: Sizes.maxWidth
  }, 
  sortByModal: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.5,
    marginTop: Sizes.maxHeight * 0.47,
    borderRadius: 10
  },
  sortByHeaderView: {
    width: Sizes.maxWidth * 0.9, 
    height: Sizes.maxHeight * 0.035,
    borderBottomWidth: 0.8,
    borderBottomColor: '#eee',
  }, 
  sortByHeaderText: {
    color: '#888', 
    fontSize: 12
  }, 
  sortByOption: {
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft: 10,
    opacity: 0.5
  },
  sortByOptionSelected: {
    opacity: 1
  }, 
  sortByImage: {
    width: Sizes.maxWidth * 0.06,
    height: Sizes.maxHeight * 0.03,
    marginHorizontal: 15
  }, 
  sortByText: {
    fontWeight: '600'
  }, 
  sortByModalCloseButton: {
    width: Sizes.maxWidth * 0.90,
    height: Sizes.maxHeight * 0.07,
    backgroundColor: '#ddd',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  sortByModalCloseButtonText: {
    fontWeight: '700',
    color: '#444'
  }
})

export default styles
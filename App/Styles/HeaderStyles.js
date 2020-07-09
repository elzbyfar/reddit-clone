import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  headerContainer: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.17,
    borderBottomColor: "#bbb", 
    borderBottomWidth: 0.3,
    backgroundColor: "#000",    
  },
  headerPhoto: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.17,
    position: 'absolute',
    opacity: 0.6
  },
  searchBarContainer: {
    alignItems: 'center', 
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Sizes.maxHeight * 0.07
  },
  searchBar: {
    textAlign: 'center',
    borderWidth: 0.4,
    borderColor: '#bbb',
    backgroundColor: '#eee',
    color: '#000',
    opacity: 0.7,
    width: Sizes.maxWidth * 0.9,
    height: Sizes.maxHeight * 0.04,
    borderRadius: 5
  },
  searchIcon: {
    position: 'absolute',
    width: Sizes.maxWidth * 0.06,
    height: Sizes.maxHeight * 0.05,
    opacity: 0.5,
    margin: Sizes.maxWidth * 0.01
  }, 
  logo: {
    alignSelf: 'center',
    marginTop: Sizes.maxHeight * 0.02,
    width: Sizes.maxWidth * 0.2,
    height: Sizes.maxHeight * 0.08
  },
}) 

export default styles
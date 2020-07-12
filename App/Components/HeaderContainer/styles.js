import { StyleSheet } from 'react-native'
import Sizes from '../../Helpers/Sizes'

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 1,
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.17,
    borderBottomColor: "#bbb", 
    borderBottomWidth: 0.3,
    backgroundColor: "#0377fc",    
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
    marginTop: Sizes.maxHeight * 0.06
  },
  searchBar: {
    textAlign: 'center',
    width: Sizes.maxWidth * 0.9,
    height: Sizes.maxHeight * 0.04,
    backgroundColor: '#eee',
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: '#bbb',
    color: '#000',
    opacity: 0.7,
  },
  searchIcon: {
    position: 'absolute',
    width: Sizes.maxWidth * 0.06,
    height: Sizes.maxHeight * 0.028,
    margin: Sizes.maxWidth * 0.01,
    opacity: 0.5,
  }, 
  backArrowContainer: {
    position: 'absolute',
    paddingTop: Sizes.maxHeight * 0.125,
    paddingLeft: Sizes.maxWidth * 0.045,
    zIndex: 2
  },
  backArrow: {
    width: Sizes.maxWidth * 0.05, 
    height: Sizes.maxHeight * 0.02,
    opacity: 0.8
  },
  logoContainer: {
    alignSelf: 'center',
    width: Sizes.maxWidth * 0.2,
    height: Sizes.maxHeight * 0.091
  },
  logo: {
    alignSelf: 'center',
    marginTop: Sizes.maxHeight * 0.03,
    width: Sizes.maxWidth * 0.2,
    height: Sizes.maxHeight * 0.091
  },
}) 

export default styles
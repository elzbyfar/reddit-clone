import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  subRedditInfoContainer: {
    width: Sizes.maxWidth, 
    height: Sizes.maxHeight * 0.23,
    flexDirection: 'column',
    alignItems: "center", 
    justifyContent: 'space-around'
  }, 
  subRedditTitleContainer: {
    width: Sizes.maxWidth,
    paddingHorizontal: Sizes.maxWidth * 0.05,
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subRedditTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  joinButton: {
    backgroundColor: '#022599',
    width: Sizes.maxWidth * 0.15,
    flexDirection: 'row',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  joinButtonText: {
    color: "#fff",
    fontSize: 13
  },
  joinPlus: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18,
    marginBottom: Sizes.maxWidth * 0.006,
    marginRight: Sizes.maxWidth * 0.006,
  },
  subRedditStatsContainer: {
    paddingHorizontal: Sizes.maxWidth * 0.05,
    flexDirection: 'column',
    width: Sizes.maxWidth,
  },
  subRedditStats: {
    fontSize: 12,
    color: "#666",
    textAlign: 'left'
  },
  subRedditTagLine: {
    fontSize: 12,
    color: '#222',
    marginTop: Sizes.maxHeight * 0.005
  },
  sortOptionsContainer: {
    paddingHorizontal: Sizes.maxWidth * 0.03,
    flexDirection: 'row',
    width: Sizes.maxWidth,
    justifyContent: 'space-between'
  },
  sortOptions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sortIcon: {
    width: Sizes.maxWidth * 0.029,
    height: Sizes.maxHeight * 0.017,
    opacity: 0.8,
    margin: Sizes.maxWidth * 0.01
  },
  sortBy: {
    fontSize: 10,
    letterSpacing: 0.01,
    color: '#111', 
    fontWeight: '900'
  },
  dropDownIcon: {
    width: Sizes.maxWidth * 0.022,
    height: Sizes.maxHeight * 0.008,
    opacity: 0.8,
    margin: Sizes.maxWidth * 0.013
  },
  viewOptions: {

  },
  viewOptionImage: {
    width: Sizes.maxWidth * 0.05, 
    height: Sizes.maxHeight * 0.02
  },
})

export default styles
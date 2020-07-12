import { StyleSheet } from 'react-native'
import Sizes from '../../Helpers/Sizes'

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
    height: Sizes.maxHeight * 0.02,
    opacity: 0.8
  },

  //VIEW MODAL STYLES
  viewModalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#00000095',
    width: Sizes.maxWidth
  }, 
  viewModal: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.3,
    marginTop: Sizes.maxHeight * 0.67,
    borderRadius: 15
  }, 
  viewOption: {
    width: Sizes.maxWidth * 0.95, 
    height: Sizes.maxHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft: 10,
    opacity: 0.6
  },
  viewOptionSelected: {
    opacity: 1
  },
  viewOptionImage: {
    width: Sizes.maxWidth * 0.05, 
    height: Sizes.maxHeight * 0.02,
    marginHorizontal: 15,
  },
  viewOptionText: {
    fontWeight: '600'
  }, 
  viewModalCloseButton: {
    width: Sizes.maxWidth * 0.90,
    height: Sizes.maxHeight * 0.07,
    backgroundColor: '#ddd',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewModalCloseButtonText: {
    fontWeight: '700',
    color: '#444'
  }, 

  //SORT MODAL STYLES
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
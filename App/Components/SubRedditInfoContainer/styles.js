import { StyleSheet } from 'react-native'
import Size from '../../Helpers/Size'

const styles = StyleSheet.create({
  subRedditInfoContainer: {
    width: Size.maxWidth, 
    height: Size.maxHeight * 0.23,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    flexDirection: 'column',
    alignItems: "center", 
    justifyContent: 'space-around'
  }, 
  subRedditTitleContainer: {
    width: Size.maxWidth,
    paddingHorizontal: Size.maxWidth * 0.05,
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
    width: Size.maxWidth * 0.15,
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
    marginBottom: Size.maxWidth * 0.006,
    marginRight: Size.maxWidth * 0.006,
  },
  subRedditStatsContainer: {
    paddingHorizontal: Size.maxWidth * 0.05,
    flexDirection: 'column',
    width: Size.maxWidth,
  },
  subRedditStats: {
    fontSize: 12,
    color: "#777",
    textAlign: 'center',
    marginTop: Size.maxHeight * 0.008, 
  },
  subRedditHeadLine: {
    fontWeight: '600',
    textAlign:'center',
    fontSize: 13,
    color: '#222',
  },
  subRedditTagLine: {
    textAlign:'center',
    fontSize: 11,
    color: '#222',
  },
  sortOptionsContainer: {
    paddingHorizontal: Size.maxWidth * 0.03,
    width: Size.maxWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sortOptions: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sortIcon: {
    width: Size.maxWidth * 0.05,
    height: Size.maxHeight * 0.02,
    opacity: 0.8,
    margin: Size.maxWidth * 0.01
  },
  sortBy: {
    fontSize: 10,
    letterSpacing: 0.01,
    color: '#111', 
    fontWeight: '900'
  },
  dropDownIcon: {
    width: Size.maxWidth * 0.022,
    height: Size.maxHeight * 0.008,
    opacity: 0.8,
    margin: Size.maxWidth * 0.013
  },
  viewOptions: {

  },
  viewOptionImage: {
    width: Size.maxWidth * 0.05, 
    height: Size.maxHeight * 0.02,
    opacity: 0.8
  },

  //VIEW MODAL STYLES
  viewModalContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#00000095',
    width: Size.maxWidth
  }, 
  viewModal: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: Size.maxWidth * 0.95, 
    height: Size.maxHeight * 0.3,
    marginTop: Size.maxHeight * 0.67,
    borderRadius: 15
  }, 
  viewOption: {
    width: Size.maxWidth * 0.95, 
    height: Size.maxHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft: 10,
    opacity: 0.6
  },
  viewOptionSelected: {
    opacity: 1
  },
  viewOptionImage: {
    width: Size.maxWidth * 0.05, 
    height: Size.maxHeight * 0.02,
    marginHorizontal: 15,
  },
  viewOptionText: {
    fontWeight: '600'
  }, 
  viewModalCloseButton: {
    width: Size.maxWidth * 0.90,
    height: Size.maxHeight * 0.07,
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
    width: Size.maxWidth
  }, 
  sortByModal: {
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: Size.maxWidth * 0.95, 
    height: Size.maxHeight * 0.5,
    marginTop: Size.maxHeight * 0.47,
    borderRadius: 10
  },
  sortByHeaderView: {
    width: Size.maxWidth * 0.9, 
    height: Size.maxHeight * 0.035,
    borderBottomWidth: 0.8,
    borderBottomColor: '#eee',
  }, 
  sortByHeaderText: {
    color: '#888', 
    fontSize: 12
  }, 
  sortByOption: {
    width: Size.maxWidth * 0.95, 
    height: Size.maxHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row', 
    marginLeft: 10,
    opacity: 0.5
  },
  sortByOptionSelected: {
    opacity: 1
  }, 
  sortByImage: {
    width: Size.maxWidth * 0.095,
    height: Size.maxHeight * 0.038,
    marginHorizontal: 15
  }, 
  sortByText: {
    fontWeight: '600'
  }, 
  sortByModalCloseButton: {
    width: Size.maxWidth * 0.90,
    height: Size.maxHeight * 0.07,
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
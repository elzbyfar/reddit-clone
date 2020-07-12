import { StyleSheet } from 'react-native'
import Size from '../../Helpers/Size'

const styles = StyleSheet.create({
  postsContainer: {
    width: Size.maxWidth, 
    height: Size.maxHeight * 0.6,
    backgroundColor: '#ddd',
    alignItems: "center", 
    justifyContent: 'center'
  }, 
  galleryContainer: {
    width: Size.maxWidth,
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  listPost: {
    width: Size.maxWidth, 
    backgroundColor: "#fff",
    paddingHorizontal: Size.maxWidth * 0.03, 
    paddingVertical: Size.maxHeight * 0.01, 
    borderBottomColor: "#eee", 
    borderBottomWidth: 1.5, 
    flexDirection: 'column',
    justifyContent: 'space-between'
  }, 
  userAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Size.maxWidth
  }, 
  userNameAndTime: {
    color: "#777",
    fontSize: 12,
  },
  listImage: {
    overflow: 'hidden',
    width: Size.maxWidth * 0.23, 
    height: Size.maxHeight * 0.08,
    borderRadius: 5,
    marginRight: Size.maxWidth * 0.055
  },
  cardImage: {
    overflow: 'hidden',
    width: Size.maxWidth,
    height: Size.maxWidth,
    marginLeft: -Size.maxWidth * 0.031
  },
  galleryImageBox: {
    flex: 1,
    width: Size.maxWidth, 
    height: Size.maxHeight * 0.25,
    marginVertical: 3,
  },
  galleryImage: {
    marginVertical: 3,
    width: Size.maxWidth, 
    height: Size.maxHeight * 0.25,
  },
  postTitleContainerForClassic: {
    width: Size.maxWidth, 
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  postTitleContainerForCard: {
    width: Size.maxWidth, 
    paddingVertical: 10,
    flexDirection: 'column'
  },
  postTitleForClassic: {
    width: Size.maxWidth * 0.67, 
  },
  postTitleForCard: {
    width: Size.maxWidth,
    paddingRight: Size.maxWidth * 0.05,
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 8
  },
  postControls: {
    flexDirection: 'row', 
    width: Size.maxWidth * 0.95, 
    justifyContent: 'space-between'
  },
  votesContainer: {
    flexDirection: 'row',
    alignContent: 'center', 
  },
  upsCount: {
    fontSize: 11, 
    fontWeight: '600',
    color: '#777', 
    marginRight: 3,
    marginLeft: 5,
  },
  upsCountSelected: {
    color: '#e8571a'
  },
  downCountSelected: {
    color: '#6f51f0'
  },
  arrow: {
    width: Size.maxWidth * 0.04,
    height: Size.maxHeight * 0.015, 
    tintColor: "#8b8c8f",
  },
  arrowUpVote: {
    tintColor: '#e8571a',
  },
  arrowDownVote: {
    tintColor: '#6f51f0'
  },
  commentsContainer: {
    flexDirection: 'row'
  },
  commentIcon: {
    width: Size.maxWidth * 0.035,
    height: Size.maxHeight * 0.015, 
    opacity: 0.6
  }, 
  commentCount: {
    marginLeft: 7,
    fontSize: 11, 
    fontWeight: '600',
    color: '#777', 
  },
  shareContainer: {
    flexDirection: 'row'
  },
  shareIcon: {
    width: Size.maxWidth * 0.035,
    height: Size.maxHeight * 0.015, 
    opacity: 0.6
  }, 
  shareText: {
    marginLeft: 6,
    fontSize: 12, 
    fontWeight: '600',
    color: '#777', 
  },
  awardIcon: {
    width: Size.maxWidth * 0.045,
    height: Size.maxHeight * 0.018, 
    opacity: 0.6

  }
})

export default styles
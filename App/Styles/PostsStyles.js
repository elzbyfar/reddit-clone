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
    // height: Sizes.maxHeight * 0.19,
    // height: Sizes.maxHeight * 0.18,
    // maxHeight: Sizes.maxHeight * 0.2,
    backgroundColor: "#fff",
    paddingHorizontal: Sizes.maxWidth * 0.03, 
    paddingVertical: Sizes.maxHeight * 0.01, 
    borderBottomColor: "#eee", 
    borderBottomWidth: 1.5, 
    flexDirection: 'column',
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
    overflow: 'hidden',
    width: Sizes.maxWidth * 0.23, 
    height: Sizes.maxHeight * 0.08,
    borderRadius: 5,
    marginRight: Sizes.maxWidth * 0.055
  },
  postTitleContainer: {
    width: Sizes.maxWidth, 
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  postTitle: {
    width: Sizes.maxWidth * 0.6, 
  },
  listPostBottomControls: {
    flexDirection: 'row', 
    width: Sizes.maxWidth * 0.95, 
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
    width: Sizes.maxWidth * 0.04,
    height: Sizes.maxHeight * 0.015, 
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
    width: Sizes.maxWidth * 0.035,
    height: Sizes.maxHeight * 0.015, 
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
    width: Sizes.maxWidth * 0.035,
    height: Sizes.maxHeight * 0.015, 
    opacity: 0.6
  }, 
  shareText: {
    marginLeft: 6,
    fontSize: 11, 
    fontWeight: '600',
    color: '#777', 
  },
  awardIcon: {
    width: Sizes.maxWidth * 0.045,
    height: Sizes.maxHeight * 0.018, 
    opacity: 0.6

  }
})

export default styles
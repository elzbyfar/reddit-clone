import { StyleSheet } from 'react-native'
import Sizes from '../Helpers/Sizes'

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center", 
    width: Sizes.maxWidth,
    height: Sizes.maxHeight * 0.83,
    justifyContent: 'space-between'
  }, 
})

export default styles
import { StyleSheet } from 'react-native'
import Sizes from '../../Helpers/Sizes'

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    width: Sizes.maxWidth,
    height: Sizes.maxHeight * 0.83,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center", 
  }, 
})

export default styles
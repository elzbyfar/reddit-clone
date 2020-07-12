import { StyleSheet } from 'react-native'
import Size from '../../Helpers/Size'

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    width: Size.maxWidth,
    height: Size.maxHeight * 0.83,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: "center", 
  }, 
})

export default styles
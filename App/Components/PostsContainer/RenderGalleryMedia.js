import React from 'react'
import styles from './styles'
import { TouchableOpacity, Image } from 'react-native'

const RenderGalleryMedia = (props) => {
  return (
    props.post.largeImage ? (
      <TouchableOpacity
        style={styles.galleryImageBox}
        activeOpacity={1}
        key={props.post.id}
        onPress={() => props.setWebView(props.post.url)}
      >
        <Image
          style={styles.galleryImage}
          source={props.post.largeImage && { uri: props.post.largeImage }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    ) :
    null
  );
};

export default RenderGalleryMedia
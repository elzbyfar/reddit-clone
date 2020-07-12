import React from 'react'
import styles from '../Styles/PostsStyles'
import { TouchableOpacity, Image } from 'react-native'

const RenderGalleryMedia = (props) => {
  return (
    props.post.data.url_overridden_by_dest && (
      <TouchableOpacity
        style={styles.galleryImageBox}
        activeOpacity={1}
        key={props.post.data.id}
        onPress={() => props.setWebView(`http://reddit.com${props.post.data.permalink}?&utm_name=iossmf`)}
      >
        <Image
          style={styles.galleryImage}
          source={{ uri: props.post.data.url_overridden_by_dest }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    )
  );
};

export default RenderGalleryMedia
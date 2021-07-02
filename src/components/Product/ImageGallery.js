import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useRef } from "react";
import ImageGalleryComponent from 'react-image-gallery';
import { getFileType } from "../../utils/functions";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  gallery: {
      width: '100%',
      height: 'calc(100vh - 270px)'
  },
  thumbnail: {
      width: 150,
      height: 80,
      objectFit: "cover",
      objectPosition: 'top'
  }
}))
const ImageGallery = ({
  images = []
}) => {
    const classes = useStyles();
    const videoRef = useRef(null);

    return <ImageGalleryComponent 
      height={'100%'}
      items={images.map(img => ({ original: img, thumbnail: img }))}
      showBullets
      renderItem={value => (getFileType(value.original) === "image" ? 
          <img className={clsx("image-gallery-image", classes.gallery)} src={value.original} alt="ad" /> : 
          <video ref={videoRef} className={clsx("image-gallery-image", classes.gallery)} src={value.original} controls />)}
      infinite={false}
      renderThumbInner={value => (getFileType(value.original) === "image" ? 
          <img src={value.original} className={clsx("image-gallery-thumbnail-image", classes.thumbnail)} alt="ad" /> : 
          <video src={value.original} className={clsx("image-gallery-thumbnail-image", classes.thumbnail)} />)}
      onPlay={() => videoRef.current.play()}
      onPause={() => videoRef.current.pause()}
      slideInterval={99999999} 
      showPlayButton={false}
    />
}
export default ImageGallery;
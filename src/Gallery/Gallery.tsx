import { FC, useState } from "react";
import styles from "./Gallery.module.scss";
import { GalleryProps } from "./types";
import MainPicture from "./MainPicture/MainPicture";
import Preview from "./Preview/Preview";
import Navigation from "./Navigation/Navigation";

const Gallery: FC<GalleryProps> = ({ pictures }) => {
  const [activePictureIndex, setactivePictureIndex] = useState<number>(0);

  const activePicture = pictures[activePictureIndex];
  const prevPicture = pictures[activePictureIndex - 1];
  const nextPicture = pictures[activePictureIndex + 1];

  if (pictures.length === 0) return null;
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__container}>
        <MainPicture
          className={styles.gallery__main}
          activePicture={activePicture}
          prevPicture={prevPicture}
          nextPicture={nextPicture}
        />
        <Navigation
          className={styles.gallery__navigation}
          disableNextPicture={!nextPicture}
          disablePrevPicture={!prevPicture}
          onNextPicture={() => {
            setactivePictureIndex(activePictureIndex + 1);
          }}
          onPrevPicture={() => {
            setactivePictureIndex(activePictureIndex - 1);
          }}
        />
      </div>
      <Preview
        className={styles.gallery__preview}
        pictures={pictures}
        activePictureIndex={activePictureIndex}
      />
    </div>
  );
};

export default Gallery;

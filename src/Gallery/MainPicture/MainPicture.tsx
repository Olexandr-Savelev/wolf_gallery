import { FC } from "react";
import { MainPictureProps } from "../types";
import styles from "./MainPicture.module.scss";
import cn from "classnames";

const MainPicture: FC<MainPictureProps> = ({
  className,
  activePicture,
  prevPicture,
  nextPicture,
}) => {
  return (
    <div className={cn(className, styles.mainPicture)}>
      <img
        className={styles.mainPictureImg}
        src={activePicture.src}
        alt="main picture"
      />
      {prevPicture && (
        <img
          className={styles.mainPictureImgPrev}
          src={prevPicture.src}
          alt="main picture"
        />
      )}
      {nextPicture && (
        <img
          className={styles.mainPictureImgNext}
          src={nextPicture.src}
          alt="main picture"
        />
      )}
    </div>
  );
};

export default MainPicture;
